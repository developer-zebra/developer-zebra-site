
## Notes

****** DO NOT MERGE THIS BRANCH BACK INTO THE MAIN BRANCHES ********

- All source is inside MDMTK 2.0 folder with exception of anything we need to re-use like MX
- For MX we use Markdown notation like EMDK uses (so stays in context of MDMTK)
- The Header and Layout were modified to not load the analytics, sumome, etc


## Building for electron

1) build mdm_mdmtk
2) cd electron-with-express
3) electron .



## Packaging electron

MAC:
electron-packager /Users/bhecox/Development/emdk/developer-zebra-site/electron-express "MDM Toolkit" --platform=win32 --arch=all --version=1.2.5 --out=Staging --version-string.CompanyName="Zebra Technologies Inc."  --version-string.ProductName="MDM Toolkit" --version-string.ProductVersion=2.0


WIN(virtual machine):

electron-packager Z:\bhecox\Development\emdk\developer-zebra-site\electron-express "MDM Toolkit" --platform=win32 --arch=all --version=1.2.5 --out=Staging --version-string.CompanyName="Zebra Technologies Inc."  --version-string.ProductName="MDM Toolkit" --version-string.ProductVersion=2.0



## zip package on MAC
zip -r foo.zip foo -x "*.DS_Store"