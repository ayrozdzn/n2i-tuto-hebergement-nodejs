# n2i-tuto-hebergement-nodejs
Petit site de démo pour le tuto d'hébergement de la nuit de l'info


### Installation sur alwaysdata
```shell
rsync -av --exclude=node_modules . nuitdelinfo@ssh-nuitdelinfo.alwaysdata.net:/home/nuitdelinfo/n2i-tuto-hebergement-nodejs

ssh nuitdelinfo@ssh-nuitdelinfo.alwaysdata.net

cd n2i-tuto-hebergement-nodejs

npm i
```
