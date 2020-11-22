import React, { Component } from "react";
import "./StylesbusquedaTrabajosPorRealizar.css";
import axios from "axios";

import { Link } from "react-router-dom";

class busquedaTrabajosPorRealizarJ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      datos: [],
      datosB: [],
    };
  }

  componentDidMount() {
    //https://barppi.herokuapp.com/api/trabajador
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        console.log(res.data);
        this.setState({
          datos: res.data.results,
          datosB: res.data.results,
        });
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }

  filtrarElementos = () => {
    var search = this.state.datos.filter((item) => {
      if (
        item.name.includes(this.state.busqueda) ||
        item.name.toLowerCase().includes(this.state.busqueda) ||
        item.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(this.state.busqueda) ||
        item.name.toUpperCase().includes(this.state.busqueda) ||
        item.name
          .toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(this.state.busqueda)
      ) {
        return item;
      }
    });
    this.setState({ datosB: search });
  };

  onChange = async (e) => {
    e.persist();
    await this.setState({ busqueda: e.target.value });
    this.filtrarElementos();
    console.log(this.state.busqueda);
  };

  render() {
    console.log(this.state.datos);
    console.log(this.state.datosB);
    const characters = this.state.datosB;
    return (
      <div>
        <header>
          <nav className="menu-fixed-busqueda-trabajos-por-realizar">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to="/TrabajadoresInicio/TrabajosPorRealizar">
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

        <div className="busqueda-fixed-trabajos-por-realizar">
          <div className="div-texto-buscar-buscarTrabajosPorRealizar">
            Buscar
          </div>
          <div className="div-input-buscar-buscarTrabajosPorRealizar">
            <input
              placeholder="Nombre del trabajo por realizar"
              className="input-buscar-buscarTabajosPorRealizar"
              type="text"
              autoComplete="off"
              id="BUSQUEDA"
              name="busqueda"
              value={this.state.busqueda}
              onChange={this.onChange}
            />
          </div>
          <main>
            <div className="cards-fixed-trabajos-por-realizar">
              {characters.map((datosT) => {
                return (
                  <div className="divCardTrabajosPorRealizar">
                    <Link
                      className="link_TrabajosPorRealizar"
                      to={`/TrabajadoresInicio/TrabajosPorRealizar/CardTrabajosPorRealizar/${datosT.id}`}
                    >
                      <div className="card-TrabajosPorRealizar">
                        <div className="CardGrid_TrabajosPorRealizar">
                          <div className="divimgFotoPerfil_TrabajosPorRealizar">
                            <div className="imgdivcenterFotoPerfil_TrabajosPorRealizar">
                              <img
                                className="imgFotoPerfil_TrabajosPorRealizar"
                                src={datosT.image}
                                alt="Foto_Perfil"
                              />
                            </div>
                          </div>
                          <div className="divdatosCuerpo_TrabajosPorRealizar">
                            <div className="card_body_TrabajosPorRealizar">
                              <div className="div_TopCard_TrabajosPorRealizar">
                                <h5 className="Nombre_Trabajador_TrabajosPorRealizar">
                                  {datosT.name}
                                </h5>
                              </div>
                              <div className="div-grid-numero-direccion-TrabajosPorRealizar">
                                <p className="Numero_TrabajosPorRealizar">
                                  Número telefonico: {datosT.telefono}
                                </p>
                                <p className="direccion_TrabajosPorRealizar">
                                  Dirección:{datosT.direccion}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default busquedaTrabajosPorRealizarJ;
