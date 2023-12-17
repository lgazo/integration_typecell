source ./.mutagen.env
mutagen sync create -c .mutagen.yml --name=integration-typecell $LOCAL_DIR $NC_HOST:$NC_WWW_DIR/apps-extra/integration_typecell
