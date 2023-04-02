#!/bin/bash

# Solicita una descripción para el commit
read -p "Ingrese una descripción para el commit: " descripcion

# Si el usuario no ingresó nada, establece el texto por defecto
if [ -z "$descripcion" ]
then
  descripcion="Actualización:"
fi

# Agrega los cambios
git add .

# Hace el commit con la descripción ingresada por el usuario o la predeterminada
git commit -m "$descripcion"

# Sube los cambios al repositorio remoto
git push origin master:main
