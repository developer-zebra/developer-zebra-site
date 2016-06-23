
## Notes

****** DO NOT MERGE THIS BRANCH BACK INTO THE MAIN BRANCHES ********

- All source is inside MDMTK 2.0 folder with exception of anything we need to re-use like MX
- For MX we use Markdown notation like EMDK uses (so stays in context of MDMTK)
- The Header and Layout were modified to not load the analytics, sumome, etc


## Building for electron

1) build mdm_mdmtk
2) Copy /build_mdmtk -> /electron-with-express/public
3) Copy /build_mdmtk/mdmtk/2-0/index.html -> /electron-with-express/public/index.html (so that starting point is the MDMTK starting point)