1. To execute a script defined in your package.json file using npm, you should use the npm run command followed by the script name.

2. Resource links available for sequelize are below:
https://medium.com/@vinayak-singh/creating-crud-apis-with-node-js-and-sequelize-cli-8b90e8784422

https://medium.com/@vinayak-singh/sequelize-associations-c8a87706ce1d


3. Show list of commands: sequelize

4. npm install -g sequelize-cli

=================================
5. PS D:\projects_all\education-online\node-api-server> sequelize init


Created "config\config.json"
Successfully created models folder at project_path
Successfully created migrations folder at project_path
Successfully created seeders folder at project_path

=====================================

6. Create model: 
sequelize model:generate --name QuestionLevel --attributes level_name:string

sequelize model:generate --name QuestionType --attributes type_name:string,short_form:string

After creating model, change table name in snake_case. Make following changes:
i) Add tableName property within model after modelName
ii) Copy tableName and go to migration file paste tableName in createTable () and dropTable()
=======================================


7. sequelize db:migrate
sequelize db:migrate:undo (It will undo the last migrated file by deleting from database table)

8. sequelize  seed:generate --name question-defficulty-level


9.  .env issue
https://stackoverflow.com/questions/42335016/dotenv-file-is-not-loading-environment-variables

 If sequelize could not read .env variables in config.js, create .sequelizerc file
https://github.com/sequelize/cli/issues/1322

10. 
> To create foreign key relationship, only add association within respective models.
> To change createdAt -> created_at only add < underscored: true > within the model

11. To instantiate model into controller use model ClassName:
const models = require('../models')
const QuestionType = models.QuestionType

[https://stackoverflow.com/questions/42990853/how-to-instantiate-model-in-controller-in-nodejs]


12. Select field in get method
https://stackoverflow.com/a/69854954/26549614

13. bcrypt
https://www.weblearningblog.com/nodejs/simple-login-and-registration-with-expressjs-sequelize-bcrypt-and-jwt/
https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/



xampp issue 
1. Change password: https://stackoverflow.com/questions/24566453/resetting-mysql-root-password-with-xampp-on-localhost

2. mysql stopped sometimes: https://www.youtube.com/watch?v=84IOtc05TuA
