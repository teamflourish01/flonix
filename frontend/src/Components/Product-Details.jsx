import React from "react";
import "../Style/ProductDetails.css";
import rectangale159 from "../images/Rectangle159.svg";
import rectangale160small from "../images/Rectangle160Small.svg";
import rectangale160 from "../images/Rectangle160.svg";
import rectangale161 from "../images/Rectangle161.svg";
import img56 from "../images/image56.svg";
import img57 from "../images/image57.svg";
import img58 from "../images/image58.svg";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const ProductDetail = () => {
  return (
    <>
      <section>
        <div className="main-width">
          <div style={{ padding: "15px 0" }}>
            <div className="under1320width">
              <div className="product-d-flex">
                <div className="Detail-Image">
                  <img className="bigimg" src={rectangale159} alt="" />
                  <div className="detail4img">
                    <img className="smallimg" src={rectangale160small} alt="" />
                    <img className="smallimg" src={rectangale160small} alt="" />
                    <img className="smallimg" src={rectangale160small} alt="" />
                    <img className="smallimg" src={rectangale160small} alt="" />
                  </div>
                </div>
                <div className="Detail-content">
                  <div className="product-detail">
                    <div className="hader">
                      <h2>Clara Copper Water Purifier</h2>
                      <p className="star">
                        5
                        <span>
                          <i class="fa-solid fa-star starclr"></i>
                          <i class="fa-solid fa-star starclr"></i>
                          <i class="fa-solid fa-star starclr"></i>
                          <i class="fa-solid fa-star starclr"></i>
                          <i class="fa-solid fa-star starclr"></i>
                        </span>
                      </p>
                      <p className="text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.Quaerat ea quis repellat fuga, dignissimos ratione.
                        Quam, eius cupiditate Quaerat ea quis repellat fuga,
                        dignissimos ratione. Quam,Quaerat ea quis repellat fuga,
                        dignissimos ratione. Quam, eius cupiditate eius
                        cupiditate.
                      </p>
                    </div>
                    <div className="keyfeature">
                      <h2>Key Feature</h2>
                      <ul className="tikicone">
                        <li>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </li>
                        <li>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </li>
                        <li>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </li>
                      </ul>
                    </div>
                    <div className="btndiv">
                      <button className="inqrybtn">INQUIRY NOW</button>
                    </div>
                  </div>
                  <div className="threeicon">
                    <div className="iconediv">
                      <div className="firsticone">
                        <div className="iconeimages">
                          <img src={img56} alt="img56" />
                        </div>
                        <p>vacuum Tasted</p>
                      </div>
                      <div className="seconedicone">
                        <div className="iconeimages">
                          <img src={img58} alt="img56" />
                        </div>
                        <p>Attrective Design Concept</p>
                      </div>
                      <div className="Thiredicone">
                        <div className="iconeimages">
                          <img src={img57} alt="img56" />
                        </div>
                        <p>Leakage Proof</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="tablecontent">
                {/* <div className="tbleHading"> */}
                <Tabs>
                  <div className="tbleHading">
                    <TabList>
                      <Tab>Specification</Tab>
                      <Tab>Product Details</Tab>
                      <Tab>Perfomance Features</Tab>
                    </TabList>
                  </div>
                  <div className="table">
                    <TabPanels>
                      <TabPanel>
                        <table>
                          <tbody>
                            <tr>
                              <th>Model Name</th>
                              <td colspan="5">
                                {" "}
                                EPICAQUA ADJUSTER India 1st BIS (IS 16240 :2023){" "}
                              </td>
                            </tr>
                            <tr>
                              <th>Series</th>
                              <td colspan="5">Audi Blue</td>
                            </tr>
                            <tr>
                              <th>Color</th>
                              <td colspan="5">White, Blue</td>
                            </tr>
                            <tr>
                              <th>Total Capacity</th>
                              <td colspan="5">15L</td>
                            </tr>
                            <tr>
                              <th>Purifying Technology</th>
                              <td colspan="5">RO +UV + UF+ ATDS</td>
                            </tr>
                            <tr>
                              <th>In The Box</th>
                              <td colspan="5">
                                1 Water Purifier, Clarity Cartridge,
                                Installation Kit and User Manual
                              </td>
                            </tr>
                            <tr>
                              <th>Power Requirement</th>
                              <td colspan="5">
                                AC 100-250 V, 50/60 Hz, 50W Electric
                              </td>
                            </tr>
                            <tr>
                              <th>Power Consumption</th>
                              <td colspan="5">50W</td>
                            </tr>
                            <tr>
                              <th>Electrical Type</th>
                              <td colspan="5">Electric</td>
                            </tr>
                            <tr>
                              <th>Purification Features</th>
                              <td colspan="5">
                                RO UV UF, RO UV UF TDS with mineral water,
                                Provides
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </TabPanel>
                      <TabPanel>
                        <table>
                          <tbody>
                            <tr>
                              <th>Table 2</th>
                              <td colspan="5"> Table 2 Data</td>
                            </tr>
                            <tr>
                              <th>Series</th>
                              <td colspan="5">Audi Blue</td>
                            </tr>
                            <tr>
                              <th>Color</th>
                              <td colspan="5">White, Blue</td>
                            </tr>
                            <tr>
                              <th>Total Capacity</th>
                              <td colspan="5">15L</td>
                            </tr>
                            <tr>
                              <th>Purifying Technology</th>
                              <td colspan="5">RO +UV + UF+ ATDS</td>
                            </tr>
                            <tr>
                              <th>In The Box</th>
                              <td colspan="5">
                                1 Water Purifier, Clarity Cartridge,
                                Installation Kit and User Manual
                              </td>
                            </tr>
                            <tr>
                              <th>Power Requirement</th>
                              <td colspan="5">
                                AC 100-250 V, 50/60 Hz, 50W Electric
                              </td>
                            </tr>
                            <tr>
                              <th>Power Consumption</th>
                              <td colspan="5">50W</td>
                            </tr>
                            <tr>
                              <th>Electrical Type</th>
                              <td colspan="5">Electric</td>
                            </tr>
                            <tr>
                              <th>Purification Features</th>
                              <td colspan="5">
                                RO UV UF, RO UV UF TDS with mineral water,
                                Provides
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </TabPanel>
                      <TabPanel>
                        <table>
                          <tbody>
                            <tr>
                              <th>Three </th>
                              <td colspan="5"> Third Table </td>
                            </tr>
                            <tr>
                              <th>Series</th>
                              <td colspan="5">Audi Blue</td>
                            </tr>
                            <tr>
                              <th>Color</th>
                              <td colspan="5">White, Blue</td>
                            </tr>
                            <tr>
                              <th>Total Capacity</th>
                              <td colspan="5">15L</td>
                            </tr>
                            <tr>
                              <th>Purifying Technology</th>
                              <td colspan="5">RO +UV + UF+ ATDS</td>
                            </tr>
                            <tr>
                              <th>In The Box</th>
                              <td colspan="5">
                                1 Water Purifier, Clarity Cartridge,
                                Installation Kit and User Manual
                              </td>
                            </tr>
                            <tr>
                              <th>Power Requirement</th>
                              <td colspan="5">
                                AC 100-250 V, 50/60 Hz, 50W Electric
                              </td>
                            </tr>
                            <tr>
                              <th>Power Consumption</th>
                              <td colspan="5">50W</td>
                            </tr>
                            <tr>
                              <th>Electrical Type</th>
                              <td colspan="5">Electric</td>
                            </tr>
                            <tr>
                              <th>Purification Features</th>
                              <td colspan="5">
                                RO UV UF, RO UV UF TDS with mineral water,
                                Provides
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </TabPanel>
                    </TabPanels>
                  </div>
                </Tabs>
                {/* </div> */}
                {/* <div className="table"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="relatedproducts">
                <h1>Related Products</h1>
                <div className="reltd-card" style={{ margin: "50px 0" }}>
                  <div className="card">
                    <img src={rectangale159} alt="rectangle159" />
                    <p>Lorem Ipsum is simply dummy text of</p>
                  </div>
                  <div className="card">
                    <img src={rectangale160} alt="rectangle159" />
                    <p>Lorem Ipsum is simply dummy text of</p>
                  </div>
                  <div className="card">
                    <img src={rectangale161} alt="rectangle159" />
                    <p>Lorem Ipsum is simply dummy text of</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
