import React, { Component } from "react";
import "./StylesMiPerfilComoTrabajador.css";
import axios from "axios";

import { Link } from "react-router-dom";

class MiPerfilComoTrabajador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero_id_trabajador: this.props.numero_id_trabajador,
      datos: [],
      form1T: {
        primerNombreT: '',
        segundoNombreT: ''
      },
      form2T:{
        primerApellidoT: '',
        segundoApellidoT: ''
      },
      form3T:{

      },
      form4T:{
        descripcionTrabajador: ''
      }
    };
  }
  
  //Form1T
  handleChange1T = async (e) => {
    e.persist();
    await this.setState({
      form1T: {
        ...this.state.form1T,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form1T);
  };

  handleSubmit1T = (e) => {
    e.preventDefault();
    const user1T = {
      primerNombreT: this.state.primerNombreT,
      segundoNombreT: this.state.segundoNombreT,
    };
    console.log(user1T);
  };

  //FIN
  //Form2T
  handleChange2T = async (e) => {
    e.persist();
    await this.setState({
      form2T: {
        ...this.state.form2T,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form2T);
  };

  handleSubmit2T = (e) => {
    e.preventDefault();
    const user2T = {
      primerApellidoT: this.state.primerApellidoT,
      segundoApellidoT: this.state.segundoApellidoT,
    };
    console.log(user2T);
  };
  //Fin
  //Form3T
  handleChange3T = async (e) => {
    e.persist();
    await this.setState({
      form3T: {
        ...this.state.form3T,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form3T);
  };

  handleSubmit3T = (e) => {
    e.preventDefault();
    const user3T = {
      Correo: this.state.Correo,
      ConfirmarCorreo: this.state.ConfirmarCorreo,
      Contrasena: this.state.Contrasena,
      ConfirmarContrasena: this.state.ConfirmarContrasena,
    };
    console.log(user3T);
  };
  //Fin
  //Form4T
  handleChange4T = async (e) => {
    e.persist();
    await this.setState({
      form4T: {
        ...this.state.form4T,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form4T);
  };

  handleSubmit4T = (e) => {
    e.preventDefault();
    const user4T = {
      descripcionTrabajador: this.state.descripcionTrabajador,
    };
    console.log(user4T);
  };
  //Fin


  componentDidMount(){
    axios.get(`https://rickandmortyapi.com/api/character/${this.state.numero_id_trabajador}`)
      .then(res =>{
        console.log(res.data)
        this.setState({
          datos: res.data
        })
    }).catch(err=>{
      console.log(err.massage)
    })
  }

  render() {
    console.log(this.state.datos)
    const characters = this.state.datos;

    const datosForm1T = this.state.form1T;
    const datosForm2T = this.state.form2T;
    const datosForm3T = this.state.form3T;
    const datosForm4T = this.state.form4T;

    return (
      <div>
        <header>
          <nav className="menu-fixed-mi-perfil-como-trabajador">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to="/TrabajadoresInicio">
                  <button className="btn">
                    <img
                      className="RegistroBarberosFlecha"
                      src="https://1.bp.blogspot.com/-OYlVxSxCItI/X6Ra_EEz0kI/AAAAAAAAIUY/dP6wDIIGGwY5LXcU-M4KM972oLfNJruOwCLcBGAsYHQ/s1054/Flecha.png"
                      alt="Retroceder"
                    />
                  </button>
                </Link>
              </div>
              <div className="divimgRegistroBarberosBarppi">
                <div className="imgRegistroBarberosLogo">
                  <img
                    className="imgRegistroBarberosBarppi"
                    src="https://1.bp.blogspot.com/-5RT03EhuKo4/X03AaXpDoPI/AAAAAAAAHOo/rQpTJBbrX-8J66PwoQjW_GsjKrrZAAysACLcBGAsYHQ/s1000/Blogo.png"
                    alt="LogoBarppi"
                  />
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="informacion-fixed-mi-perfil-como-trabajador">
          <div className="div-img-fotoPerfiltrabajador-InformacionTrabajador">
            <div className="div-img-grid-fotoPerfiltrabajador-InformacionTrabajador">
              <div className="div-div-img-fotoPerfil-Trabajador">
                <img
                  className="img-fotoPerfil-InformacionTrabajador"
                  src={characters.image}
                  alt="FotoPerfil"
                />
              </div>
              <div className="div-div-cambiarFotoPerfil-Trabajador">
                Cambiar foto de perfil
              </div>
            </div>
          </div>
          <div className="grid-informacion-personalTrabajador">
            <div className="div-nombreTrabajador-Perfil">
              <div className="div-textoSuperior">Nombres</div>
              <button
                data-toggle="modal"
                data-target="#nombresDelTrabajador-MiPerfilComoTrabajador"
                type="button"
                className="btn"
              >
                <div>{characters.name}</div>
              </button>
            </div>
            <div className="div-apellidosTrabajador-Perfil">
              <div className="div-textoSuperior">Apellidos</div>
              <button
                data-toggle="modal"
                data-target="#apellidosDelTrabajador-MiPerfilComoTrabajador"
                type="button"
                className="btn"
              >
                <div>{characters.name}</div>
              </button>
            </div>
            <div className="div-tipoTrabajador-Perfil">
              <div className="div-textoSuperior">Tipo de trabajador</div>

              <div className="radioBox-tipoTrabajador">
                <div className="div-radioBox">
                  <div>
                    <input
                      type="radio"
                      name="TipoTrabajador form-check-input"
                      id="Barbero"
                    />
                    <label className="form-check-label" for="Barbero">
                      BARBERO
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="TipoTrabajador form-check-input"
                      id="Peluquero"
                    />
                    <label for="Peluquero" className="form-check-label">
                      PELUQUERO
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-descripcionTrabajador-Perfil">
              <div className="div-textoSuperior">Descripción</div>
              <button
                data-toggle="modal"
                data-target="#descripcionDelTrabajador-MiPerfilComoTrabajador"
                type="button"
                className="btn"
              >
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  mollitia aspernatur nobis similique quia neque asperiores,
                  doloribus placeat ullam consequatur soluta alias facere
                  dolorem voluptate ipsam, quaerat id libero maiores.
                </div>
              </button>
            </div>
          </div>
          <div className="div-buton-configaraciondeinformacionpersonal">
            <Link
              to="/TrabajadoresInicio/MiPerfilComoTrabajador/InformacionPersonal"
              type="button"
              className="btn btn-configaraciondeinformacionpersonal-Trabajador"
            >
              CONFIGURACIÓN DE INFORMACIÓN PERSONAL
            </Link>
          </div>

          {/* NOMBRES DEL TRABAJADOR */}
          <div className="div-nombresDelTrabajador-modal-MiPerfilComoTrabajador">
            <div
              class="modal fade"
              id="nombresDelTrabajador-MiPerfilComoTrabajador"
              data-backdrop="static"
              data-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                      Tus Nombres
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                  <form onSubmit={this.handleSubmit1T}>
                    <div className="body-div-grid-inputs-costoTrabajoTrabajador">
                      <input
                        placeholder="Primer nombre"
                        className="input-costoTrabajoTrabajador-InformacionPersonalTrabajador"
                        type="text"
                        id="PRIMERNOMBRET"
                        name="primerNombreT"
                        autoComplete="off"
                        onChange={this.handleChange1T}
                        value={datosForm1T.primerNombreT}
                      />
                      <input
                        placeholder="Segundo nombre"
                        className="input-costoTrabajoTrabajador-InformacionPersonalTrabajador"
                        type="text"
                        id="SEGUNDONOMBRET"
                        name="segundoNombreT"
                        autoComplete="off"
                        onChange={this.handleChange1T}
                        value={datosForm1T.segundoNombreT}
                      />
                    </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-cerrar-InformacionPersonalTrabajador"
                      data-dismiss="modal"
                    >
                      OKY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* APELLIDOS DEL TRABAJADOR */}
          <div className="div-apellidosDelTrabajador-modal-MiPerfilComoTrabajador">
            <div
              class="modal fade"
              id="apellidosDelTrabajador-MiPerfilComoTrabajador"
              data-backdrop="static"
              data-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                      Tus Apellidos
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={this.handleSubmit2T}>
                    <div className="body-div-grid-inputs-costoTrabajoTrabajador">
                      <input
                        placeholder="Primer apellido"
                        className="input-costoTrabajoTrabajador-InformacionPersonalTrabajador"
                        type="text"
                        id="PRIMERAPELLIDOT"
                        name="primerApellidoT"
                        autoComplete="off"
                        onChange={this.handleChange2T}
                        value={datosForm2T.primerApellidoT}
                      />
                      <input
                        placeholder="Segundo apellido"
                        className="input-costoTrabajoTrabajador-InformacionPersonalTrabajador"
                        type="text"
                        id="SEGUNDOAPELLIDOT"
                        name="segundoApellidoT"
                        autoComplete="off"
                        onChange={this.handleChange2T}
                        value={datosForm2T.segundoApellidoT}
                      />
                    </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-cerrar-InformacionPersonalTrabajador"
                      data-dismiss="modal"
                    >
                      OKY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* DESCRIPCION DEL TRABAJADOR */}
          <div className="div-descripcionDelTrabajador-modal-MiPerfilComoTrabajador">
            <div
              class="modal fade"
              id="descripcionDelTrabajador-MiPerfilComoTrabajador"
              data-backdrop="static"
              data-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                      Tú descripción
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={this.handleSubmit4T}>
                    <div className="body-div-grid-inputs-costoTrabajoTrabajador">
                      <input
                        placeholder="Escribe en este apartado tu descripcion como trabajador"
                        className="input-costoTrabajoTrabajador-InformacionPersonalTrabajador"
                        type="text"
                        id="DESCRIPCIONTRABAJADOR"
                        name="descripcionTrabajador"
                        autoComplete="off"
                        onChange={this.handleChange4T}
                        value={datosForm4T.descripcionTrabajador}
                      />
                    </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-cerrar-InformacionPersonalTrabajador"
                      data-dismiss="modal"
                    >
                      OKY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default MiPerfilComoTrabajador;
