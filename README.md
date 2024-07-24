# Portal de Acceso - Next.js

Este proyecto es un portal de acceso creado con Next.js que valida credenciales de usuario contra un web service. Dependiendo del dominio del usuario, se ejecuta uno de dos posibles servicios web.

## Descripción del Proyecto

El portal de acceso permite a los usuarios iniciar sesión utilizando sus credenciales. El nombre de usuario debe estar en el formato `usuario@dominio`. El sistema valida estas credenciales contra un web service específico dependiendo del dominio del usuario.

### Funcionalidades

- **Validación de credenciales**: Los usuarios pueden iniciar sesión utilizando su nombre de usuario y contraseña.
- **Detección automática de IP**: La aplicación obtiene automáticamente la dirección IP del usuario.
- **Interfaz de usuario moderna**: Utiliza SweetAlert2 para mostrar mensajes de éxito y error en un formato estilizado.
- **Validación de dominio**: Dependiendo del dominio del usuario, se ejecuta un servicio web específico.

## Tecnologías Utilizadas

- Next.js
- React
- Axios
- SweetAlert2
- FontAwesome
- CSS Modules
