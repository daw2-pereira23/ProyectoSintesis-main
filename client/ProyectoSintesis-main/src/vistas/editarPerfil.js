
export const editarPerfil = {
  template: `
   <div class="card">
        <div class="card-body">
            <form class="form" id="formularioEditar" novalidate>
                <div class="mb-3">
                    <label for="nickEditar" class="form-label">
                        Nick
                    </label>
                    <input type="text" class="form-control" id="nickEditar">
                </div>
                <div class="mb-3">
                    <label for="emailEditar" class="form-label">
                        Correo Electronico
                    </label>
                    <input type="text" class="form-control" id="emailEditar">
                </div>
                <div class="mb-3">
                    <label for="passwordEditar" class="form-label">
                        Contraseña
                    </label>
                    <input type="text" class="form-control" id="passwordEditar">
                </div>
            </form>
        </div>
   </div>`,
  script: () => {

  }
}
