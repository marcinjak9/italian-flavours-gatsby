import React, { Component } from 'react'
import { SvgLoader, SvgProxy } from 'react-svgmt'
import map from '../img/Regions-new.svg'

class MapFormContainer extends Component {
  state = {
    regions: ["Veneto", "Umbria", "Tuscany"],
    selectedRegion: "Umbria"
  }
  componentDidMount () {
    
  }

  selectRegionHandler = (region) => {
    this.setState({ selectedRegion: region })
  }
  
  render() {
    const { selectedRegion, regions } = this.state 
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
                      <select className="form-control" id="region-select">
                        <option style={{ marginTop: 50 }} value="" disabled selected>Select the region you don’t want missy</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group select-form">
                      <select className="form-control" id="activity-select">
                        <option value="" disabled selected>Select one “must to do” holiday’s activity</option>
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
                <div className="col-md-6">
                  {/* <Svg src={map} className="img-fluid" alt="" /> */}
                  <SvgLoader path={map}>
                    {regions.map((region) => {
                      return (
                        <span>
                          <SvgProxy selector={`g#${region}`} onElementSelected={element => element.addEventListener('click', () => this.selectRegionHandler(region))} />
                          {document.querySelector(`g#${region} path[data-name="bg"]`)
                            ?
                              <SvgProxy selector={`g#${region} path[data-name="bg"]`} style={`${selectedRegion === region && "fill: red;"}`} />
                            :
                              <SvgProxy selector={`g#${region} #bg path`} style={`${selectedRegion === region && "fill: red;"}`} />
                          }
                        </span>
                      )
                    })}
                  </SvgLoader>
                  <h3>{selectedRegion && selectedRegion}</h3>
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
