package com.symbol.emdkdocs;

import java.util.ArrayList;

public class ClassInfo {
	public boolean isOfSpecifiedAssemby = false;
	public String FullClassName = "";
	public String ClassName = "";
	public String ClassType = "";
	public String ClassSummary = "";
	public String ClassExample = "";
	public ArrayList<MdocInfo> Methods = new ArrayList<MdocInfo>();
	public ArrayList<MdocInfo> Constructors = new ArrayList<MdocInfo>();
	public ArrayList<MdocInfo> Properties = new ArrayList<MdocInfo>();

	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("FullClassName: " + FullClassName + "\n");
		sb.append("ClassName: " + ClassName + "\n");
		sb.append("ClassType: " + ClassType + "\n");
		sb.append("ClassSummary: " + ClassSummary + "\n");
		sb.append("ClassExample: " + ClassExample + "\n");

		if (Constructors.size() > 0) {
			sb.append("\nConstructors:\n");
		}

		if (Methods.size() > 0) {
			sb.append("\nMethods:\n\n");
			for (MdocInfo mi : Methods) {
				sb.append("MethodName: " + mi.Name + "\n");
				sb.append("MethodSignature: " + mi.Signature + "\n");
				sb.append("MethodSummary: " + mi.Summary + "\n");
				if (mi.Parameters.size() > 0) {
					sb.append("Parameters: \n");
					for (ParameterInfo pi : mi.Parameters) {
						sb.append(pi.Type + " " + pi.Name + "\n");
					}
				}

				sb.append("Returns: \n" + mi.Return + "\n\n");
			}
		}

		if (Properties.size() > 0) {
			for (MdocInfo pi : Properties) {
				sb.append("PropertyName: " + pi.Name + "\n");
				sb.append("PropertySummary: " + pi.Summary + "\n\n");
				sb.append("ReturnType: " + pi.Return + "\n");
			}
		}

		return sb.toString();

	}

	public String toMarkdownString() {
		StringBuilder sb = new StringBuilder();
		// sb.append("FullClassName: " + FullClassName + "\n");
		//sb.append("#" + ClassName + "\n");

		sb.append("---\n");
		sb.append("title: "+ClassName+"\n");
		sb.append("layout: guide.html \n");
		sb.append("product: EMDK For Xamarin \n");
		sb.append("productversion: '2.1' \n");
		sb.append("---\n");

		sb.append(ClassSummary + "\n\n");

		if (!ClassExample.equals("")) {
			sb.append("Example Usage:\n\n\t:::\n\t" + ClassExample + "\n");
		}

		sb.append("**Type** - " + ClassType + "\n\n");

		if (Constructors.size() > 0) {
			sb.append("##Constructors\n");
			for (MdocInfo ci : Constructors) {
				if (ci.isOfSpecifiedAssemby) {
					sb.append("###" + ci.Name + "\n");
					sb.append("**" + ci.Signature + "**\n\n");
					if (!ci.Example.equals("")) {
						sb.append("Example Usage:\n\t:::\n\t" + ci.Example + "\n");
					}
				}
			}

		}

		if (Methods.size() > 0) {
			sb.append("##Methods\n");
			for (MdocInfo mi : Methods) {
				if (mi.isOfSpecifiedAssemby) {
					sb.append("###" + mi.Name + "\n");
					if (!mi.Signature.equals("")) {
						sb.append("**" + mi.Signature + "**\n\n");
					}

					sb.append("" + mi.Summary + "\n\n");

					if (!mi.Example.equals("")) {
						sb.append("Example Usage:\n\n\t:::\n\t" + mi.Example + "\n");
					}

					if (mi.Parameters.size() > 0) {
						sb.append("**Parameters:** \n\n");
						for (ParameterInfo pi : mi.Parameters) {
							sb.append("* " + pi.Type + " **" + pi.Name + "** - " + pi.Summary + "\n");

						}
					}

					sb.append("\n**Returns** - " + mi.Return + "\n\n");

				}

			}
		}

		if (Properties.size() > 0) {
			sb.append("##Properties\n\n");
			for (MdocInfo pi : Properties) {
				if (pi.isOfSpecifiedAssemby) {
					sb.append("###" + pi.Name + "\n");
					sb.append("" + pi.Summary + "\n\n");

					if (!pi.Example.equals("")) {
						sb.append("Example Usage:\n\n\t:::\n\t" + pi.Example + "\n");
					}

					sb.append("**Type** - " + pi.Return + "\n");
				}
			}
		}

		return sb.toString();

	}

	public class MdocInfo {
		public boolean isOfSpecifiedAssemby = false;
		public String Name = "";
		public String Signature = "";
		public String Return = "";
		public String Summary = "";
		public String Example = "";
		public ArrayList<ParameterInfo> Parameters = new ArrayList<ParameterInfo>();

		public void updateParameterSummary(String name, String summary) {
			for (ParameterInfo pi : Parameters) {
				if (pi.Name.equals(name)) {

					pi.Summary = summary;
					System.out.println(("Updating param summary: " + name + " =>" + summary));
				}
			}
		}
	}

	public class ParameterInfo {
		public String Name = "";
		public String Type = "";
		public String Summary = "";

	}

}
