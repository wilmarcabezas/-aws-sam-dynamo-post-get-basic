# AWS SAM DynamoDB - Post & Get (Básico) :cloud:

Este es un proyecto de ejemplo que utiliza AWS SAM (Serverless Application Model) y DynamoDB para crear una aplicación de servidor sin servidor que permite a los usuarios publicar y recuperar datos de una tabla de DynamoDB. :computer:

## Instalación :wrench:

Para instalar y utilizar este proyecto, sigue los siguientes pasos:

1. Asegúrate de tener instalado [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) en tu máquina. :electric_plug:
2. Clona este repositorio en tu máquina local. :floppy_disk:
3. En el terminal, navega hasta la carpeta del proyecto y ejecuta el comando `sam build`. :hammer:
4. Una vez completada la compilación, ejecuta el comando `sam deploy --guided` para desplegar la aplicación en tu cuenta de AWS. :rocket:

## Uso :mag:

Una vez desplegada la aplicación, puedes utilizar las siguientes URLs para interactuar con ella:

- `/post`: permite publicar un nuevo elemento en la tabla de DynamoDB. :pencil2:
- `/get`: permite recuperar un elemento de la tabla de DynamoDB mediante su clave primaria. :mag_right:

## Licencia :scroll:

Este proyecto se encuentra disponible bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE) en este repositorio. :book:
