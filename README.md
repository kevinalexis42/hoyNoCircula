# Nombre del Proyecto

Aplicación Web de registro de autos y validación de Hoy No Circula

## Estructura del Proyecto FRONTEND

```
auto-registro-frontend/
│
├── node_modules/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── ConsultaCirculacion.js
│   │   ├── ConsultaCirculacion.css
│   │   ├── RegistroAuto.js
│   │   └── RegistroAuto.css
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md
```

## Requisitos Previos

- Node.js (versión 20.18.0)
- SQLite (versión 3.46.0)
- Visual Studio Code (recomendado para desarrollo)

## Dependencias Principales

- React: ^18.3.1
- React DOM: ^18.3.1
- React Router DOM: ^6.27.0
- React Icons: ^5.3.0
- Axios: ^1.7.7
- React Scripts: 5.0.1

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/kevinalexis42/hoyNoCircula.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd 'dirreccion\donde\seguardo'
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución del Proyecto

Para iniciar el servidor de desarrollo:

```
npm start
```

Esto iniciará la aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

## Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo.
- `npm test`: Ejecuta los tests.
- `npm run build`: Construye la app para producción en la carpeta `build`.

---------------------------------------------------------------------------------------

## Estructura del Proyecto BACKEND

```
auto-registro/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── autoregistro/
│   │   │               ├── config/
│   │   │               ├── controller/
│   │   │               │   └── AutoController.java
│   │   │               ├── model/
│   │   │               │   └── Auto.java
│   │   │               ├── repository/
│   │   │               │   └── AutoRepository.java
│   │   │               ├── service/
│   │   │               │   └── AutoService.java
│   │   │               └── AutoRegistroApplication.java
│   │   └── resources/
│   │       ├── static/
│   │       ├── templates/
│   │       └── application.properties
│   └── test/
├── target/
├── .gitignore
├── auto_registro.db
├── HELP.md
├── mvnw
├── mvnw.cmd
└── pom.xml
```

## Requisitos Previos

- Java 21 (Java SE Runtime Environment build 21.0.4+8-LTS-274)
- Maven
- SQLite 3.46.0
- IntelliJ IDEA (recomendado para desarrollo)

## Tecnologías Utilizadas

- Spring Boot 3.2.2
- Spring Data JPA
- SQLite
- Maven

## Configuración

La configuración de la base de datos SQLite se encuentra en `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:sqlite:auto_registro.db
spring.datasource.driver-class-name=org.sqlite.JDBC
spring.jpa.database-platform=org.hibernate.community.dialect.SQLiteDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

## Instalación y Ejecución

1. Clona el repositorio:
   ```
   git clone https://github.com/kevinalexis42/hoyNoCircula.git
   ```

2. Abre el proyecto en IntelliJ IDEA.

3. Asegúrate de que Maven descargue todas las dependencias.

4. Ejecuta la aplicación desde la clase principal `AutoRegistroApplication`.

La aplicación estará disponible en `http://localhost:8080`.

## Desarrollo

Este proyecto fue inicialmente generado usando [Spring Initializr](https://start.spring.io/).

## Dependencias Principales

Las dependencias principales se encuentran en el archivo `pom.xml`. Incluyen:

- spring-boot-starter-data-jpa
- spring-boot-starter-web
- sqlite-jdbc (versión 3.46.1.0)
- hibernate-community-dialects

## Pruebas

Para ejecutar las pruebas, puedes usar el comando de Maven en la terminal de IntelliJ:

```
mvn test
```

O ejecutar las pruebas directamente desde la interfaz de IntelliJ IDEA.
