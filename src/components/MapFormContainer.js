import React, { Component } from 'react'
import { SvgLoader, SvgProxy } from 'react-svgmt'
import map from '../img/Regions-new.svg'

class MapFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRegion: "",
      onClient: false,
    }
  }

  componentDidMount () {
    this.setState({ onClient: true })
  }

  selectRegionHandler = (region) => {
    this.setState({ selectedRegion: region })
  }
  
  render() {
    const { selectedRegion, onClient } = this.state 
    const { regions } = this.props
    // const regions = ["Abruzzo","Apulia","Basilicata","Calabria","Campania","Emilia-Romagna","Friuli-Venezia-Giulia","Latium","Liguria","Lombardy","Marche","Molise","Piedmont","Sardinia","Sicily","Tuscany","Trentino","Umbria","Aosta_Valley","Veneto" ]
    return (
      <div className="container-fluid cari-amici-section grey-bg">
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col-md-12 section-title-wrapper">
                  <h2 className="text-center dk-brand-text">
                    Let
                    {"'"}
                    s start from here your tailor-made holidays
                  </h2>
                </div>
                <form className="col-md-6 d-flex flex-column home-form">
                  <div className="select-group">
                    <div className="form-group select-form" style={{ marginBottom: 80 }}>
                      <select className="form-control" id="region-select" onChange={(e) => this.selectRegionHandler(e.target.value)}>
                        <option style={{ marginTop: 50 }} value="" defaultChecked>Select the region you don’t want missy</option>
                        {regions.map(region => <option key={region} selected={region === selectedRegion}>{region}</option>)}
                      </select>
                    </div>
                    <div className="form-group select-form">
                      <select className="form-control" id="activity-select">
                        <option value="" disabled defaultChecked>Select one “must to do” holiday’s activity</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Your email address" />
                    <strong className="brand-text">I will let you know within 24-hrs</strong>
                    <div className="text-right">
                      <button type="submit" className="btn btn-primary">Let Me know</button>
                    </div>
                  </div>
                </form>
                <div className="col-md-6 map-container">
                  {/* <Svg src={map} className="img-fluid" alt="" /> */}
                  <SvgLoader path={map}>
                    {regions.map((region) => {
                      return (
                        <span>
                          <SvgProxy selector={`g#${region}`} onElementSelected={element => element.addEventListener('click', () => this.selectRegionHandler(region))} />
                          {onClient  && document.querySelector(`g#${region} path[data-name="bg"]`)
                            ?
                              <span>
                                <SvgProxy selector={`g#${region} path[data-name="bg"]`} style={`${selectedRegion === region && "fill: #00B2A7;"}`} />
                                <SvgProxy selector={`g#${region} g[data-name="text"] path`} style={`${selectedRegion === region && "fill: #fff;"}`} />
                              </span>
                            :
                              <span>
                                <SvgProxy selector={`g#${region} #bg path`} style={`${selectedRegion === region && "fill: #00B2A7;"}`} />
                                <SvgProxy selector={`g#${region} #text path`} style={`${selectedRegion === region && "fill: #fff;"}`} />
                              </span>
                          }
                        </span>
                      )
                    })}
                  </SvgLoader>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MapFormContainer
