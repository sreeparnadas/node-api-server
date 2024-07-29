> To execute a script defined in your package.json file using npm, you should use the npm run command followed by the script name.


https://medium.com/@vinayak-singh/sequelize-associations-c8a87706ce1d

npm install -g sequelize-cli

=================================
PS D:\projects_all\education-online\node-api-server> sequelize init


Created "config\config.json"
Successfully created models folder at project_path
Successfully created migrations folder at project_path
Successfully created seeders folder at project_path

=====================================

> Create model: 
sequelize model:generate --name questionLevel --attributes level_name:string

sequelize model:generate --name QuestionType --attributes type_name:string,short_form:string
=======================================


sequelize db:migrate
sequelize db:migrate:undo (It will undo the last migrated file by deleting from database table)

sequelize  seed:generate --name question-defficulty-level


.env issue
https://stackoverflow.com/questions/42335016/dotenv-file-is-not-loading-environment-variables


> If sequelize could not read .env variables in config.js, create .sequelizerc file
https://github.com/sequelize/cli/issues/1322


> To create foreign key relationship, only add association within respective models.
> To change createdAt -> created_at only add < underscored: true > within the model

