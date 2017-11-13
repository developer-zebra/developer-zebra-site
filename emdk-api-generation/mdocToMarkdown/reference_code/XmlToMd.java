package com.symbol.emdkdocs;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import java.util.Map;
import java.util.TreeMap;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class XmlToMd {

	ClassInfo classInfo = null;

	public static void main(String[] args) {

		ClassInfo classInfo = new ClassInfo();

		FileWriter _mdClassFileWriter = null;
		PrintWriter _mdClassFile = null;
		String _mdFileName;
		FileWriter _mdListFileWriter = null;
		PrintWriter _mdListFile = null;
		String _mdListFileName = null;

		String xmlPath = "";
		String markdownPath = xmlPath + "";
		Map<String, String> classMap = new TreeMap<String, String>();
		String assembly = "";


		if (args.length > 2) {

			try {
				if (args[0].contains("in")) {
					String[] args0 = args[0].split("=");
					xmlPath = args0[1];
					System.out.println("input Path: " + xmlPath);
					String[] xmlPathArray = xmlPath.split("/");
					_mdListFileName = xmlPathArray[xmlPathArray.length - 1] + ".EMDKList.md";
					System.out.println("md list file name: " + _mdListFileName);

				}
			} catch (Exception e) {

				e.printStackTrace();
			}

			try {
				if (args[1].contains("out")) {
					String[] args1 = args[1].split("=");
					markdownPath = args1[1];
					System.out.println("output Path: " + markdownPath);
				}
			} catch (Exception e) {

				e.printStackTrace();
			}

			try {
				if (args[2].contains("assembly")) {
					String[] args2 = args[2].split("=");
					assembly = args2[1];
					System.out.println("assembly: " + assembly);
				}
			} catch (Exception e) {

			}

			if (xmlPath.equals("") || markdownPath.equals("") || assembly.equals("")) {
				printUsageAndExit();
			}

		} else {
			printUsageAndExit();
		}

		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder builder = null;

		File f = new File(markdownPath);
		if (!f.exists()) {
			f.mkdir();
		}

		try {
			builder = factory.newDocumentBuilder();
		} catch (ParserConfigurationException e) {

			e.printStackTrace();
		}

		System.out.println("##Processing mDoc XML##");

		File folder = new File(xmlPath);
		File[] listOfFiles = folder.listFiles();

		for (int file = 0; file < listOfFiles.length; file++) {
			if (listOfFiles[file].isFile()) {
				String xmlFileName = listOfFiles[file].getName();
				System.out.println(
						"----------------------------------------------------------------------------------------------------");
				System.out.println("Input File: " + xmlPath + "/" + xmlFileName);

				_mdFileName = xmlFileName.replace("+", "_").replace(".xml", "");
				String baseClassName = _mdFileName.split("_")[0].replace(".md", "");

				if (!_mdFileName.contains("_") && !classMap.containsKey(_mdFileName.replace(".md", ""))) {
					classMap.put(_mdFileName.replace(".md", ""), "");
				} else {

					if (!baseClassName.equals(_mdFileName.replace(".md", ""))) {
						String currentValue = classMap.get(baseClassName);
						if (currentValue != null) {
							classMap.put(baseClassName, classMap.get(baseClassName) + _mdFileName);
						} else {
							classMap.put(baseClassName, _mdFileName);
						}
					}

				}

				System.out.println("Output File: " + markdownPath + "/" + _mdFileName + "/index.md");
				System.out.println("");

				

				try {
					classInfo = new ClassInfo();
					File xmlFile = new File(xmlPath + "/" + xmlFileName);
					Document document = builder.parse(xmlFile);

					classInfo.FullClassName = document.getDocumentElement().getAttribute("FullName").replace("+", ".");
					classInfo.ClassName = document.getDocumentElement().getAttribute("Name").replace("+", ".");

					NodeList nodeList = document.getDocumentElement().getChildNodes();

					for (int pNode = 0; pNode < nodeList.getLength(); pNode++) {
						Node node = nodeList.item(pNode);
						if (!node.getNodeName().equals("#text")) {

							if (node.getNodeName().equals("AssemblyInfo") && node.hasChildNodes()) {
								if (node.getTextContent().contains(assembly)) {
									classInfo.isOfSpecifiedAssemby = true;
									try {
                                        final File mdFile = new File(markdownPath + "/" + _mdFileName+ "/index.md");

                                        final File parent_directory = mdFile.getParentFile();

                                        if (null != parent_directory)
                                        {
                                            parent_directory.mkdirs();
                                        }

                                        _mdClassFileWriter = new FileWriter(mdFile, false);

									} catch (IOException e1) {

										e1.printStackTrace();
									}
									_mdClassFile = new PrintWriter(_mdClassFileWriter);
								}else{
									System.out.println("This class is not part of the specified assembly");
									if(classMap.containsKey(_mdFileName.replace(".md", ""))){
										classMap.remove(_mdFileName.replace(".md", ""));
									}
								}
								
								
							}

							else if (node.getNodeName().equals("Base") && node.hasChildNodes()) {
								NodeList baseNodes = node.getChildNodes();
								for (int bNode = 0; bNode < baseNodes.getLength(); bNode++) {
									Node child = baseNodes.item(bNode);
									if (!child.getNodeName().equals("#text")) {
										classInfo.ClassType = child.getTextContent().replace("+", ".");
									}
								}

							}

							else if (node.getNodeName().equals("Docs") && node.hasChildNodes()) {
								NodeList docNodes = node.getChildNodes();
								for (int dNode = 0; dNode < docNodes.getLength(); dNode++) {
									Node child = docNodes.item(dNode);
									if (!child.getNodeName().equals("#text")) {
										if (child.getNodeName().equals("summary")) {
											classInfo.ClassSummary = child.getTextContent();
										} else if (child.getNodeName().equals("example")) {
											NodeList exampleNodes = child.getChildNodes();
											for (int eNode = 0; eNode < exampleNodes.getLength(); eNode++) {
												Node eChild = exampleNodes.item(eNode);
												if (!eChild.getNodeName().equals("#text")) {
													if (eChild.getNodeName().equals("code")) {
														classInfo.ClassExample = eChild.getTextContent();
													}
												}
											}
										}
									}
								}
							} else if (node.getNodeName().equals("Members") && node.hasChildNodes()) {

								ArrayList<Node> publicMembers = new ArrayList<Node>();

								NodeList membersNodes = node.getChildNodes();
								for (int mNode = 0; mNode < membersNodes.getLength(); mNode++) {
									Node child = membersNodes.item(mNode);

									// Interate through members collecting only
									// the public members
									if (child.getNodeName().equals("Member")) {

										NodeList memberSubNodes = child.getChildNodes();
										for (int msNode = 0; msNode < memberSubNodes.getLength(); msNode++) {
											Node mSubNode = memberSubNodes.item(msNode);
											if (mSubNode.getNodeName().equals("MemberSignature")) {

												if (mSubNode.getAttributes().getNamedItem("Language").getNodeValue()
														.equals("C#")) {
													if (mSubNode.getAttributes().getNamedItem("Value").getNodeValue()
															.contains("public")) {
														publicMembers.add(child);
													}
												}
											}
										}
									}
								}

								// Process Public members
								for (Node memberNode : publicMembers) {
									NamedNodeMap mAttributes = memberNode.getAttributes();
									String memberName = mAttributes.getNamedItem("MemberName").getNodeValue();

									ClassInfo.MdocInfo methodInfo = classInfo.new MdocInfo();
									ClassInfo.MdocInfo constructorInfo = classInfo.new MdocInfo();
									ClassInfo.MdocInfo propertyInfo = classInfo.new MdocInfo();

									boolean isMethod = false;
									boolean isConstructor = false;
									boolean isProperty = false;

									NodeList memberSubNodes = memberNode.getChildNodes();
									for (int msNode = 0; msNode < memberSubNodes.getLength(); msNode++) {
										Node mSubNode = memberSubNodes.item(msNode);
										if (!mSubNode.getNodeName().equals("#text")) {

											if (mSubNode.getNodeName().equals("MemberSignature")) {

												if (mSubNode.getAttributes().getNamedItem("Language").getNodeValue()
														.equals("C#")) {

													// MemberSignature falls
													// before MemberType so its
													// to early to know
													// if its a method or
													// constructor, so load
													// signature into both to
													// make sure
													// it gets added.

													methodInfo.Signature = mSubNode.getAttributes()
															.getNamedItem("Value").getNodeValue();

													constructorInfo.Signature = mSubNode.getAttributes()
															.getNamedItem("Value").getNodeValue();

													propertyInfo.Signature = mSubNode.getAttributes()
															.getNamedItem("Value").getNodeValue();

												}
											} else if (mSubNode.getNodeName().equals("AssemblyInfo")) {
												if (mSubNode.getTextContent().contains(assembly)) {
													methodInfo.isOfSpecifiedAssemby = true;
													constructorInfo.isOfSpecifiedAssemby = true;
													propertyInfo.isOfSpecifiedAssemby = true;
												}

											} else if (mSubNode.getNodeName().equals("MemberType")) {

												if (mSubNode.getTextContent().equals("Method")) {
													isMethod = true;
													methodInfo.Name = memberName;

												}

												else if (mSubNode.getTextContent().equals("Constructor")) {
													isConstructor = true;
												}

												else if (mSubNode.getTextContent().equals("Property")) {
													isProperty = true;
													propertyInfo.Name = memberName;
												}

											} else if (mSubNode.getNodeName().equals("ReturnValue")) {

												NodeList returnNodes = mSubNode.getChildNodes();
												for (int rNode = 0; rNode < returnNodes.getLength(); rNode++) {
													Node n = returnNodes.item(rNode);
													if (!n.getNodeName().equals("#text")) {

														if (isMethod) {
															methodInfo.Return = n.getTextContent();
														} else if (isProperty) {
															propertyInfo.Return = n.getTextContent().replace("+", ".");
														}

													}
												}

											} else if (mSubNode.getNodeName().equals("Parameters")) {

												NodeList paramNodes = mSubNode.getChildNodes();
												for (int paramNode = 0; paramNode < paramNodes
														.getLength(); paramNode++) {
													Node n = paramNodes.item(paramNode);
													if (!n.getNodeName().equals("#text")) {
														if (n.hasAttributes()) {
															ClassInfo.ParameterInfo pi = classInfo.new ParameterInfo();
															pi.Name = n.getAttributes().getNamedItem("Name")
																	.getNodeValue();
															pi.Type = n.getAttributes().getNamedItem("Type")
																	.getNodeValue().replace("+", ".");

															if (isMethod) {
																methodInfo.Parameters.add(pi);
															}
															if (isConstructor) {
																constructorInfo.Parameters.add(pi);
															}

														}

													}
												}

											} else if (mSubNode.getNodeName().equals("Docs")) {

												NodeList docNodes = mSubNode.getChildNodes();
												for (int dNode = 0; dNode < docNodes.getLength(); dNode++) {
													Node child = docNodes.item(dNode);
													if (!child.getNodeName().equals("#text")) {
														if (child.getNodeName().equals("summary")) {
															if (isMethod) {
																methodInfo.Summary = child.getTextContent();
															} else if (isConstructor) {
																constructorInfo.Summary = child.getTextContent();
															} else if (isProperty) {
																propertyInfo.Summary = child.getTextContent();
															}

														} else if (child.getNodeName().equals("example")) {
															NodeList exampleNodes = child.getChildNodes();
															for (int eNode = 0; eNode < exampleNodes
																	.getLength(); eNode++) {
																Node eChild = exampleNodes.item(eNode);
																if (!eChild.getNodeName().equals("#text")) {
																	if (eChild.getNodeName().equals("code")) {
																		if (isMethod) {
																			methodInfo.Example = eChild
																					.getTextContent();
																		} else if (isConstructor) {
																			constructorInfo.Example = eChild
																					.getTextContent();
																		} else if (isProperty) {
																			propertyInfo.Example = eChild
																					.getTextContent();
																		}

																	}
																}
															}
														} else if (child.getNodeName().equals("param")) {
															if (isMethod) {
																String paramName = child.getAttributes()
																		.getNamedItem("name").getNodeValue();

																if (paramName != null && paramName != "") {

																	methodInfo.updateParameterSummary(paramName,
																			child.getTextContent());
																}
															}

														}
													}
												}
											}

										}

									}
									if (isMethod) {
										classInfo.Methods.add(methodInfo);
									} else if (isConstructor) {
										constructorInfo.Name = constructorInfo.Signature.split("\\(")[0]
												.replace("public", "").replace(" ();", "");

										classInfo.Constructors.add(constructorInfo);
									} else if (isProperty) {
										classInfo.Properties.add(propertyInfo);
									}

								}

							}

						}

					}

				} catch (SAXException | IOException e) {
					e.printStackTrace();

				}

			}
			if (classInfo.isOfSpecifiedAssemby) {
				System.out.println(classInfo.toString());
				_mdClassFile.printf("%s" + "%n%n", classInfo.toMarkdownString());
				_mdClassFile.close();
				try {
					_mdClassFileWriter.close();
				} catch (IOException e) {

					e.printStackTrace();
				}
			}

		}

//		try {
//			_mdListFileWriter = new FileWriter(markdownPath + "/" + _mdListFileName, false);
//		} catch (IOException e1) {
//
//			e1.printStackTrace();
//		}
//
//		_mdListFile = new PrintWriter(_mdListFileWriter);
//
//		StringBuilder sb = new StringBuilder();
//		sb.append("##" + _mdListFileName.replace(".md", "") + "\n\n");
//
//		for (Object key : classMap.keySet()) {
//			System.out.println("-" + key);
//			sb.append("###" + key + "\n\n");
//			sb.append("* [" + key + "](../api/" + key + ")\n");
//
//			String[] subClasses = classMap.get(key).toString().split(".md");
//			for (String subClass : subClasses) {
//				if (!subClass.equals("")) {
//					System.out.println(" -" + subClass);
//
//					sb.append("* [" + subClass + "](../api/" + subClass + ")\n");
//				}
//			}
//			sb.append("\n\n");
//
//		}
//		_mdListFile.printf("%s" + "%n%n", sb.toString());
//		_mdListFile.close();
//		try {
//			_mdListFileWriter.close();
//		} catch (IOException e) {
//
//			e.printStackTrace();
//		}

	}

	public static void printUsageAndExit() {
		System.out.println(
				"Usage:\n java -jar XmlToEmdkDoc.jar in=mdoc/Symbol.XamarinEMDK out=markdown/core/ assembly=2.1.0.4");
		System.exit(0);
	}

}
