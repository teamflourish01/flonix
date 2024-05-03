import React, { useState } from 'react';
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
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ data
  const faqs = [
      {
          heading: 'Specifications',
          question1: 'Model Name',
          answer1: 'APICAQUA ADJUSTER India 1st BIS (IS 16240 :2023) ',
          question2: 'Series',
          answer2: 'Audi Blue',
          question3: 'Color',
          answer3: 'White, Blue',
          question4: 'Total Capacity',
          answer4: '15L',
          question5: 'Purifying Technology',
          answer5: 'RO +UV + UF+ ATDS',
          question6: 'In The Box',
          answer6: '1 Water Purifier, Clarity Cartridge, Installation Kit and User Manual',
          question7: 'Power Requirement',
          answer7: 'AC 100 - 250 V, 50/60 Hz',
          question8: 'Power Consumption',
          answer8: '50W',
          question9: 'Electrical Type',
          answer9: 'Electric',
          question10: 'Purification Features',
          answer10: 'RO UV UF, RO UV UF TDS with mineral water, Provides ',
      },
      {
        heading: 'Product Details',
        question1: 'Detachable Storage Tank',
        answer1: 'No',
        question2: 'Auto Shut Off',
        answer2: 'Yes',
        question3: 'Auto Start',
        answer3: 'Yes',
        question4: 'OverflowProtection',
        answer4: 'Yes',
        question5: 'Child Lock',
        answer5: 'No',
        question6:'FilterType',
        answer6: 'PREFILTER, CARBON FILTER, SEDIMENT FILTER,MEMBRANE,UF FILTER,UV LAMP',
        question7: 'MembraneType',
        answer7: 'Vontrone Membrane 80GPD',
        question8: 'StorageTank Material',
        answer8: 'Food Grade Plastic Tank',
        question9: 'Indicators',
        answer9: 'Water Level Indicator',
        question10: 'Other Body Features',
        answer10: 'Keep water-borne diseases away from your home by instaling the Aqua Fresh Water Purifier.',
        
      },
      {
        heading: 'Feature',
        
          question1: 'Filtration Capacity',
          answer1: '12L/hr',
          question2: 'Purification Capacity',
          answer2: '6000L',
          question3: 'ColdWater Dispenser',
          answer3: 'No',
          question4: 'HotWater Capacity',
          answer4: 'NAL',
          question5: 'HotWater Dispenser',
          answer5: 'No',
          question6: 'Maximum InputWater Temperature',
          answer6: '40degreeC',
          question7: 'Maximum InputWater Temperature',
          answer7: '10degreeC',
          question8: 'Installation Type',
          answer8: 'Wall Mount',
          question9: 'Purification Stages',
          answer9: 'icron Sediment Filter : (Stage 2):Pre Antiscalent Cham',
          question10: 'Total Dissolved Solids',
          answer10: '1200ppm',
      }
  ];

  // Function to handle click event
  const handleClick = (index) => {
      if (openFAQ === index) {
          // If clicked section is already open, close it
          setOpenFAQ(null);
      } else {
          // Otherwise, open the clicked section
          setOpenFAQ(index);
      }
  };


  return (
    <>
      <section style={{margin:"50px 0"}}>
        <div className="main-width">
          <div >
            <div className="under1320width">
              <div className='product-page-padding'>
              <div className="product-d-flex">
                <div className="Detail-Image xt5y">
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
                  <div className="faq-container">
                   {faqs.map((faq, index) => (
                <div key={index} className="faq-section">
                    <div className="faq-question" onClick={() => handleClick(index)}>
                        {faq.heading}
                        <span className={`arrow-icon ${openFAQ === index ? 'open' : ''}`}><i class="fa-solid fa-angle-down"></i></span>
                    </div>
                    {openFAQ === index && (
                        <div className="faq-answer">
                          <div className="faq-answer-space">
                            <li>{faq.question1}</li>
                            <p>{faq.answer1}</p>
                            </div>
                            <div className="faq-answer-space">
                            <li>{faq.question2}</li>
                            <p>{faq.answer2}</p>
                            </div>
                            <div className="faq-answer-space">
                            <li>{faq.question3}</li>
                            <p>{faq.answer3}</p>
                            </div>
                            <div className="faq-answer-space">
                            <li>{faq.question4}</li>
                            <p>{faq.answer4}</p>
                            </div>
                            <div className="faq-answer-space">
                            <li>{faq.question5}</li>
                            <p>{faq.answer5}</p>
                            </div>
                            <div className="faq-answer-space">
                            <li>{faq.question6}</li>
                            <p>{faq.answer6}</p>
                            </div>
                            <div className="faq-answer-space">
                            <li>{faq.question7}</li>
                            <p>{faq.answer7}</p>
                            </div>
                            <div className="faq-answer-space">
                            <li>{faq.question8}</li>
                            <p>{faq.answer8}</p>
                            </div>
                            <div className="faq-answer-space">
                            <li>{faq.question9}</li>
                            <p>{faq.answer9}</p>
                            </div>
                            <div className="faq-answer-space">
                            <li>{faq.question10}</li>
                            <p>{faq.answer10}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>


                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      {/* <section className="" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="tablecontent">
                
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
                
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* hello prince */}
      <section className="" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
            <div className='product-page-padding'>
              <div className="relatedproducts">
              <p
                className="all-heading"
                style={{ padding: "0", margin: " 0 0 50px 0" }}
              >
                Related Products
              </p>
                
              <div className="card-flex">
                    {/* <a href="/ProductDetail"> */}
                    <div className="card">
                      <img src={rectangale159} alt="rectangle159" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    {/* </a> */}
                    <div className="card">
                      <img src={rectangale160} alt="rectangle160" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale161} alt="rectangle161" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
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

// import React from 'react'
// import "../Style/ProductDetails.css";

// const ProductDetail = () => {
//   return (
//     <>
//     <section>
      
//       <div className="c7ylp utuxw0 t1wkm hqjxg" style={{ background: "#f1f3f6" }}>
//         <div className="yokd2 gode3" style={{ background: "rgb(255 255 255)", padding: "16px" }}>
//           <div className="yokd2 mn1gg col-5-12 xt5y">
//             <div className="atvbe">
//               <div className="iyjij">
//                 <div className="li7gg">
//                   <div className="dpl">
//                     <div className="fhww4">
//                       <div className="mlllq" style={{ height: "320px" }}>
//                         <ul className="gnuwp">
//                           <li className="gt85 ya6w" style={{ height: "64px" }}>
//                             <div className="aumiq p9amap">
//                               <div className="e1fgs">
                                
//                                   <img
//                                     src={rectangale159} alt=""
//                                   />
                              
//                               </div>
//                             </div>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
                  
//                 </div>
//               </div>
//             </div>
//             <div className="atvbe col-12-12">
//               <div className="p3mfp dttu2m">
//                 <ul className="row">
//                   <li className="col col-6-12">
//                     <button className="  v1www">
//                       <i className="komv2 fa-solid fa-cart-shopping fa-sm"></i>
//                       ADD TO CART
//                     </button>
//                   </li>
//                   <li className="col col-6-12">
//                       <button className="kpz6l u9uoa ihz75k awrsl">
//                       <i className="irxzi fa-solid fa-bolt-lightning "></i>
//                         BUY NOW
//                       </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="yokd2 mn1gg col-8-12 xt5yunder" >
//             <div className="atvbe col-12-12">
//               <div className="amaaes">
//                 <div style={{ textAlign: "left" }}>
//                   <h1 className="yhb1nd">
//                     <span className="bnuci">
//                     fdvdfv
//                     </span>
//                   </h1>
//                 </div>
//                 <div style={{ textAlign: "left" }}>
//                   <p className="yhb1nd" >
//                     <span className="bnuci" style={{ fontSize: "18px" }}>
//                     vfdvdfv
//                     </span>
//                   </p>
//                 </div>
//                 <div className="dyC4hf">
//                   <div className="cemieu">
//                     <div className="b18c">
//                       <div className="jeq3 jk6d ">₹</div>
//                       <div className="i9wc p6lqe">₹/-</div>
//                       <div className="ay6sb dcoz"> <span>% off</span></div>
//                       <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consectetur sed laborum, consequuntur expedita nihil eius? Reprehenderit dolor magnam ducimus soluta animi, laudantium optio. Magnam consequatur in sint vel tenetur minus ullam minima sit reprehenderit! Molestias perspiciatis non at earum facilis libero magni commodi porro dignissimos id saepe, odit error totam accusamus soluta eaque voluptas laboriosam nobis blanditiis culpa voluptate quos vero velit ipsum! Aliquid hic mollitia non tempore vero laudantium maxime laboriosam minima praesentium voluptates est facere quis unde corrupti sequi dolores fuga, tempora quod ipsam, labore quibusdam vel eaque eum rerum! Rerum, doloribus repellat praesentium in porro officiis aspernatur alias amet asperiores quo, nostrum aliquid magni! Molestiae ipsam dicta voluptatibus maiores aut beatae veritatis odio incidunt, laudantium nostrum, provident perspiciatis neque ea molestias aperiam architecto nam dolor voluptatem accusantium vel pariatur quo ipsa animi. Doloribus hic modi ipsa deleniti natus. Ad, eum magnam laborum quaerat explicabo odit voluptatum delectus repellat quod doloremque praesentium facilis! Officia inventore recusandae ab quaerat. Repellat autem officia ipsa dolore blanditiis corporis earum velit molestiae provident eius ullam molestias dolor nihil, explicabo nisi tempora minus natus maxime! Cumque maxime porro, quos facilis nemo possimus omnis, inventore mollitia ipsum nam voluptates animi suscipit maiores odio magnam? Provident alias quaerat veniam iusto deleniti, beatae fuga eligendi, ratione nam a explicabo reprehenderit! Molestiae distinctio incidunt tenetur nemo excepturi praesentium sed mollitia corporis, labore nisi. Aspernatur deserunt dolores saepe repellendus omnis a dolore, nostrum quae odio natus enim ab quas explicabo aut unde quidem cupiditate corrupti accusantium sed sapiente quo eligendi error? Architecto iusto nulla neque, numquam in temporibus tempora? Tempore fuga vel iste deleniti at, repellat ea odit! Labore nam dicta ad voluptate ratione voluptatum amet asperiores esse similique maxime molestias ducimus velit explicabo aut eveniet, enim voluptatibus provident libero minus, iure maiores. Tempora officiis deserunt totam. Voluptas ex sapiente maxime nostrum, recusandae nihil eveniet soluta tempora eum voluptatibus est quod temporibus, cumque alias debitis quos id magni asperiores, inventore architecto error eos ipsam iste animi? Iusto, sapiente commodi id, optio illum eligendi reprehenderit consequatur veritatis quaerat ipsam, earum quasi voluptatum. Voluptas consectetur saepe, cumque debitis nisi id nihil quidem, ab harum voluptates, nulla maiores cum aut nobis aliquid similique ratione vel iste dicta esse omnis fugiat modi dolorem! Molestias perferendis dolorem est voluptas iure repellendus architecto tenetur veniam expedita? Quos quas fuga deserunt laborum sapiente ipsum consequuntur suscipit amet ex, earum quo fugit! Dicta a possimus excepturi repellendus quaerat mollitia temporibus quibusdam beatae iusto earum odit tempore fugiat maxime accusamus maiores sint ullam, nesciunt eum! In perspiciatis dolorem minus corporis, facilis similique perferendis quod, repudiandae aspernatur dolorum eaque voluptatem saepe consequuntur eum numquam, deserunt atque optio. Dolore nemo ratione provident consequatur, harum fugiat, a magni nostrum, soluta aliquam incidunt magnam? Eius assumenda saepe id illo aliquam perferendis accusantium, quos, fugit a laudantium omnis labore rerum, quae repudiandae aperiam voluptatum repellat nam unde quasi enim. Provident, maxime nihil dolorum excepturi ea sit mollitia distinctio ut, itaque inventore iste dicta amet possimus similique ratione eveniet commodi illum deserunt saepe. Cum delectus ullam architecto molestias labore mollitia deserunt blanditiis vel nostrum et culpa deleniti dicta dolores, inventore aliquam! Sunt omnis porro qui mollitia dolore! Praesentium porro ratione reiciendis! Aperiam tempore minus nostrum veritatis aut, temporibus consequatur quidem eos, explicabo quam, minima fugit aliquam eaque praesentium ea laudantium et dolorem non vitae consequuntur sunt. Provident quisquam excepturi maiores dignissimos, distinctio facilis ad quos! Aliquam minima perspiciatis placeat! Ea, perferendis non magni blanditiis voluptate numquam necessitatibus beatae vitae cupiditate expedita rem quae sed tenetur odio magnam quisquam culpa totam illo dicta unde. Officia similique nobis ex at officiis necessitatibus corporis, facilis perspiciatis dolores est asperiores voluptate recusandae nemo minus laudantium ad. Ipsum quasi adipisci aspernatur ratione accusamus quas culpa alias voluptas vero voluptatum et magni, porro fugit excepturi nemo. Laboriosam, quasi voluptates. Quis magni aperiam molestiae exercitationem numquam nemo eius corporis laboriosam officiis eos illo quibusdam mollitia possimus harum repellat impedit culpa, vero expedita pariatur aliquam! Quisquam quibusdam quam ipsum tempore doloremque inventore itaque nisi expedita? Tempore consequatur neque nesciunt eius. Voluptate nostrum labore voluptatem. Eligendi, repudiandae rerum facere accusantium voluptatem officiis, porro exercitationem aspernatur quisquam numquam perspiciatis ipsa quae quasi sint magnam! Cum consequuntur deleniti qui adipisci impedit itaque, voluptate a totam eius, distinctio, omnis facere quisquam quos odit consectetur dolores vel. Assumenda fuga quod, blanditiis cumque facilis vel cum soluta. Corporis ut, beatae laborum excepturi fugiat commodi deleniti, eius non natus et quae! Ipsam exercitationem odio quod, tempora maxime quaerat perspiciatis sit repudiandae eum tenetur ratione temporibus deserunt delectus facere nihil ut illo earum soluta odit sequi illum dolore! Omnis eveniet amet error natus perspiciatis pariatur. Et distinctio ullam laborum ex quia at cupiditate assumenda. Quo exercitationem dolorum illo possimus vero itaque sapiente, quibusdam cupiditate beatae inventore accusantium illum velit, corrupti culpa quae magni aperiam nisi debitis commodi libero aut. Non blanditiis laboriosam voluptatum ipsam sit quasi voluptas accusantium! Non exercitationem nobis esse odit, perferendis architecto, illo quibusdam blanditiis magni numquam reprehenderit quasi doloremque vero labore sapiente ipsam. Optio libero eaque, dignissimos alias amet id assumenda aut ex similique consequatur dolor magni omnis debitis ab error, sapiente, rerum blanditiis rem maxime cumque. Quam dolore sed aliquam vitae itaque recusandae, animi aspernatur magnam quos. Eligendi, suscipit quibusdam neque molestias exercitationem quam cupiditate aliquam ratione accusamus sunt natus aut possimus doloribus repudiandae voluptate velit error dolor modi sapiente libero laboriosam dolorum nesciunt rerum sed. Est, necessitatibus. Vitae sunt beatae eum odit temporibus necessitatibus nemo sint atque officia dolorem! Nam voluptates, molestiae dignissimos ipsum placeat impedit facere corrupti animi. Voluptates ab labore nostrum, porro optio tempore quas illum natus sed vel odio voluptate dolore, nulla perferendis est neque voluptas. Pariatur laudantium nisi deserunt natus! Quia quos rerum corporis doloribus doloremque eos vitae at quas voluptatum alias, quam, corrupti hic cupiditate nemo totam assumenda illum libero perferendis harum consequuntur cum fuga laborum minus. Beatae sed iure quas doloremque omnis recusandae quos voluptates, impedit voluptatum veritatis labore totam magnam accusantium ea saepe vitae perspiciatis excepturi vel! Nam, accusantium numquam provident dolores quibusdam odit, molestiae aliquam ea exercitationem commodi earum eum quisquam error quae quia mollitia beatae harum ut maiores itaque eaque tempore vero obcaecati sapiente. Tempore perferendis rem obcaecati dolorem tenetur corrupti earum magnam, harum praesentium voluptatum, in ducimus debitis inventore nisi suscipit voluptas eveniet quae quidem quis. Deserunt necessitatibus ab provident eum? Commodi minus illo, ullam mollitia ea, debitis non nemo delectus esse id aut architecto inventore pariatur? Explicabo, est aliquid. Inventore nostrum dolor quia ut tenetur cum magnam sapiente, dolore ex quidem magni impedit neque, alias itaque quod praesentium voluptatem! Facilis quia id, similique dolorum aspernatur, totam eaque sunt alias amet quis nam qui vel esse laboriosam soluta maxime sit veritatis excepturi obcaecati neque accusantium! Neque placeat, delectus illo soluta consequatur provident repellat quos necessitatibus quod suscipit? Fuga quae earum saepe, quos ratione perspiciatis doloremque sequi reiciendis nesciunt excepturi cupiditate odit, sapiente omnis expedita, officia illo veritatis fugit quo asperiores mollitia tenetur iure voluptas? Et sequi ea, iusto, dolore ipsa dignissimos illo laborum assumenda corporis atque ex sit accusantium veniam aspernatur excepturi quae, dolorem iste saepe explicabo? Quam ea numquam voluptatibus cum maxime rem? Culpa, ea? Beatae, numquam tempora. Dolorem quidem praesentium maiores ex, nobis cupiditate nemo amet dolorum esse veritatis earum placeat distinctio ab aperiam ducimus eaque, ad voluptatibus ipsa repellendus consequuntur omnis quia beatae sed dolores. Iusto nobis sunt repudiandae, omnis aliquam quasi. Placeat quod, repellat commodi corporis totam quis illo nisi voluptatum error aspernatur quo incidunt ab quibusdam suscipit odio sapiente quasi neque assumenda eius atque explicabo tempora at sit distinctio! Itaque facilis accusantium quia culpa sequi, harum, adipisci enim quasi odio maiores atque alias cum quidem quod deleniti perferendis totam repudiandae voluptatem explicabo nisi velit obcaecati incidunt in? Aperiam esse mollitia modi vero perspiciatis error blanditiis sint ipsum totam qui. Corrupti explicabo ducimus ex amet earum sed reiciendis nobis architecto laudantium veritatis nemo, expedita praesentium a nihil at dolor iure animi mollitia maxime culpa repellendus. Dolor eius ad cumque. Quibusdam alias ipsa facere quidem animi id earum, officia sit eligendi similique facilis impedit a deleniti! Eos, labore ipsum. Eos dicta quisquam natus architecto cum assumenda aspernatur illo ipsam atque autem quibusdam facilis eum sint deserunt asperiores sit velit reprehenderit placeat minima ea saepe possimus, consectetur commodi! Quam id cumque, ratione ut cupiditate nisi sapiente, ex sint sunt omnis accusamus? Obcaecati ut recusandae voluptatibus temporibus. Omnis voluptatum necessitatibus dolor autem magni temporibus suscipit praesentium accusantium minus, odio, fugit iste quae at. Animi, veritatis cum? Laboriosam culpa ducimus tenetur, eum officiis odio. Commodi libero excepturi illo assumenda, natus ipsam. Dolorum quisquam exercitationem non beatae sapiente doloribus eos, ratione labore recusandae voluptate iusto quaerat, modi sit aliquid ex dolore accusamus sequi repudiandae! Tempora, pariatur quis. Accusantium est ullam quia. Dicta facere reprehenderit totam saepe ullam, accusamus fugit expedita. Debitis tempore nostrum nam officiis deleniti laudantium doloremque ad excepturi ea quasi eos neque ipsa, similique rerum ab sit! Optio et voluptates corrupti, est labore aliquid pariatur, non ullam magnam quam inventore nesciunt tenetur cumque harum repellendus maxime debitis consectetur enim doloribus iure aliquam voluptatem sapiente! Aliquam consectetur temporibus voluptatibus. Maiores laboriosam beatae quo obcaecati doloremque asperiores at laudantium sapiente blanditiis! Quia enim laborum doloremque molestiae quibusdam optio commodi qui natus asperiores voluptate? Deserunt, iusto libero quos nemo exercitationem qui perferendis voluptatibus recusandae atque omnis, aut nihil porro aperiam fuga enim! Eius quasi culpa nisi. Qui nemo repudiandae repellendus, nostrum dolore quaerat! Repellendus omnis labore velit dolorum, facere esse? Illo fuga dolorum animi quasi asperiores eveniet accusantium soluta. Quibusdam, reiciendis doloribus! Ratione, sequi? Recusandae in architecto earum quasi quia quam velit eveniet sapiente esse quis. Placeat hic facilis veniam officia beatae obcaecati eum perspiciatis, consequatur porro iure eaque totam tempore optio consequuntur alias, exercitationem quaerat, maxime corrupti praesentium dolor minus qui. Iusto quos, velit dolorem perferendis tempora facere eveniet sit vitae enim similique voluptate praesentium animi sequi dignissimos molestiae error? Fuga debitis neque ab quidem quia saepe, esse optio officiis maxime veritatis iusto amet, rerum voluptatibus tempore aliquam hic quibusdam, ducimus quo labore adipisci placeat. Numquam omnis porro ut aspernatur, minus est reiciendis. Odio tempora cum, molestias accusantium maiores libero numquam dolore incidunt dolor porro est, quis quidem, eligendi sequi veritatis aspernatur. Facilis dolore ab non obcaecati tempora dignissimos autem quidem eos. Repudiandae aliquam voluptatibus quibusdam optio, at ipsam nobis culpa doloribus ad laboriosam qui possimus mollitia quasi earum incidunt facilis laborum vitae aliquid reiciendis veritatis! Neque corrupti, esse, asperiores quos perspiciatis architecto dolorum delectus minima quo voluptate accusamus perferendis? Tempore, quia? Vero voluptatum deserunt neque repellendus vitae, nesciunt, dignissimos quam at sint, suscipit nemo quo. Amet officiis cum quas quam tenetur eius dolorem vel necessitatibus beatae in, fugit ea nemo officia laudantium delectus culpa. Iste autem consectetur, perferendis minus assumenda eius sint fugit laudantium nostrum nobis, sapiente magnam earum nemo mollitia at! Dolor porro commodi voluptatum sint, facilis recusandae possimus a? Architecto eveniet corrupti magni. Consequatur, architecto cumque eaque in reprehenderit magnam sit veritatis reiciendis sed tenetur repellendus dolorem dolorum rem animi, inventore harum dolor aperiam? Ratione atque reprehenderit, dolore ex veniam recusandae ea expedita consequuntur, excepturi laborum esse obcaecati nam adipisci. Accusantium eveniet quae corporis rem, ducimus dicta amet, suscipit adipisci modi inventore ipsum aperiam itaque dolores reprehenderit laudantium beatae similique cupiditate praesentium nesciunt, consectetur reiciendis fugit quod nobis. Minus voluptas labore aut, deleniti dignissimos, quasi ex sunt sapiente distinctio explicabo minima odio veniam vero, doloremque cupiditate. Illum ipsum recusandae sunt repellendus magni exercitationem, in, odio enim fugiat laboriosam quas id earum sit quis nostrum iure libero accusantium! Dolorem dignissimos saepe sed error corporis harum magnam molestias consequuntur, voluptatum beatae ab enim optio architecto tenetur nulla. Enim, deserunt fugit iusto odio perferendis adipisci minus ducimus optio autem atque. Asperiores, harum ex deserunt et non libero totam vero quae maiores beatae doloremque animi impedit amet error hic sequi tenetur. Sed quia quas aut praesentium dicta atque voluptate itaque nam rerum, ea ut maiores laudantium facilis beatae maxime tempore ipsa quos aliquam obcaecati voluptatibus inventore similique molestiae! Similique minus itaque pariatur at cum laudantium ipsum commodi saepe. Exercitationem, accusamus minima! Fugit, excepturi dolore ut pariatur eveniet illo, voluptatem architecto id voluptas quibusdam aut quos officia non eaque impedit ipsum! Error iure possimus debitis voluptatem facilis, corporis beatae deserunt ipsam dolore fugiat tempore voluptatum vel nostrum sed vitae in commodi et illum aut aperiam maiores molestiae dignissimos. Fugit voluptate illum, corporis incidunt ex, nisi sunt quibusdam doloribus expedita in modi eos dignissimos? Doloremque, dolorem mollitia tenetur harum voluptatibus numquam maiores perspiciatis! Excepturi sit ab tempora minus rem at dolorum voluptate cupiditate pariatur sed a consequatur possimus numquam fugit nihil rerum dicta porro vel, impedit voluptates perferendis laboriosam, provident ratione repellat. Voluptas libero laboriosam adipisci, eos voluptatum qui corporis mollitia. Ad, explicabo iure minima maxime at quia dolorum temporibus porro esse? Hic dolorum accusamus voluptates voluptate, porro labore, modi impedit, at quibusdam ipsam possimus dolorem ea excepturi facilis totam est perspiciatis dignissimos iusto adipisci incidunt placeat vero maxime rem tempore. Quaerat tenetur, porro ea ipsum reiciendis obcaecati hic, cupiditate error dicta omnis debitis voluptatibus fugiat nam dolorum in exercitationem numquam odit unde expedita non incidunt officiis? Minima facere ullam praesentium porro illo harum. Inventore aliquam, quod recusandae ad numquam dolorem eligendi. Excepturi velit nulla commodi quasi enim eos aliquid architecto! Libero eos, minima unde cupiditate tempora magnam dolorum. Iure, distinctio quasi! Cupiditate quisquam sint consectetur libero, corporis aperiam accusantium ea illum impedit alias, expedita maiores aliquam eligendi fugiat quia necessitatibus? Voluptates laborum asperiores totam, perspiciatis sit similique omnis. Officiis cum voluptas, recusandae nulla at in tempora earum hic maxime voluptate quod dignissimos atque. Deleniti repellat, saepe tenetur architecto rem dolorem vero praesentium dolor blanditiis veritatis nesciunt perferendis omnis maxime cum error porro quas non deserunt. Nesciunt, perspiciatis! Molestias sapiente non, aliquid officia optio nostrum illum amet laborum quia repudiandae voluptate explicabo quis modi nobis, culpa tempora saepe. Odio laudantium nulla tempora tenetur sequi quas dolorem cum autem eos eius saepe veritatis quia, iste ipsam voluptatum, mollitia error itaque nobis officia. Ratione quam saepe distinctio at reiciendis voluptate officiis est assumenda temporibus vel consectetur natus dignissimos alias consequuntur nisi nobis, nihil quaerat molestiae veniam debitis non harum ullam ducimus! Repellendus distinctio maxime tempora voluptates exercitationem cumque nisi placeat vero totam. Suscipit illum sequi odit expedita incidunt adipisci voluptatibus est quam tempore, facilis hic rem praesentium ullam sed harum velit quo esse eveniet inventore obcaecati explicabo a! Consectetur debitis molestiae alias nemo animi maxime tempora distinctio magni magnam? Impedit, itaque labore dolorem suscipit, tenetur animi perspiciatis eaque aliquam numquam aut fuga earum sequi quo optio nemo saepe iusto deleniti eius recusandae. Totam cumque exercitationem veritatis asperiores sint. Velit libero accusantium amet temporibus rerum, praesentium exercitationem repudiandae, sapiente delectus facere vero sequi? Exercitationem sapiente odit assumenda laudantium hic voluptas inventore quisquam aperiam esse? Numquam, consequuntur. Sunt ullam animi placeat optio incidunt quas totam, quis ratione nisi harum enim et veniam id distinctio amet explicabo cupiditate, molestias illum, rem accusamus aliquam veritatis. Iure, nesciunt! Odio corrupti mollitia explicabo recusandae, dolor illum culpa voluptatibus provident voluptates sunt id dolores molestiae ullam sed a ipsa assumenda alias quo maiores ad voluptatem impedit. Id quasi veritatis illo veniam. Nulla fuga alias sunt, quae quia ab aperiam dolore quos culpa laudantium facere deleniti similique enim incidunt repellat illo quo. Voluptas voluptatibus facilis cum inventore dignissimos. Accusantium fuga, laudantium quibusdam deserunt nesciunt harum perspiciatis est, velit, in dolorum dicta atque nostrum. Unde nostrum ullam optio iusto voluptate? Provident ab quis est voluptatem neque tenetur harum praesentium? Est saepe nisi deserunt repellat sunt. Officiis sint voluptas repellat suscipit ipsam ut soluta eius tempore consequatur dolor magni, odit cupiditate, tenetur, quisquam eum cumque esse debitis perspiciatis nam sequi quam! Delectus fugiat neque obcaecati deleniti aspernatur error doloribus, esse possimus impedit aut ullam velit quam facere? Facilis commodi corrupti nulla delectus earum dicta debitis necessitatibus ipsam sed itaque dolore possimus sequi soluta rerum nam maiores ad labore, laborum modi numquam assumenda dolores eos placeat! Repellendus repudiandae quod porro id vitae. Nemo aperiam temporibus mollitia inventore ab ut quidem iure alias vero dolores dignissimos blanditiis, sapiente quod earum eos perferendis pariatur omnis quos, quaerat officia quia. Similique, dolores pariatur fugiat suscipit nulla nihil recusandae aperiam voluptas error expedita mollitia magni minus? Eum corrupti earum laborum doloribus nisi quidem et non nam beatae deserunt! Asperiores nihil excepturi fuga ipsum assumenda culpa facere recusandae ea! Incidunt molestias ipsa ut nam officia, perspiciatis saepe fugiat harum qui adipisci. Tempora quo sapiente vel officiis recusandae minus, laudantium omnis natus voluptatum excepturi dolorem dignissimos nihil? Architecto soluta totam similique, atque nisi ipsam est, voluptates, temporibus quod esse natus possimus odit odio tempore accusantium placeat sunt illum consequatur voluptate tempora vero obcaecati praesentium enim! Dolorum, quis corporis nisi nihil quibusdam quae animi qui nobis earum. Sint velit enim saepe, perferendis incidunt aspernatur unde, ratione quas, nulla praesentium sed dignissimos repellat consequuntur! Commodi facilis similique veritatis aliquam illo blanditiis error nam a ab eaque eligendi saepe delectus quas vitae impedit ullam asperiores voluptatum quasi architecto, quis deserunt quo fugiat cumque perferendis. Quisquam, dolorem accusamus ipsam veniam praesentium aspernatur assumenda ratione itaque cumque qui provident modi obcaecati quod consequuntur distinctio voluptas exercitationem porro necessitatibus quasi maxime aut possimus minima! Dicta quibusdam autem, voluptatibus numquam accusamus maxime sequi, maiores minima quidem optio eaque animi molestiae officiis aspernatur nesciunt ipsa ex earum recusandae. Consectetur, eveniet vel. Consectetur enim voluptates nobis soluta, quaerat animi corporis, corrupti incidunt ex odio aliquam ipsa sunt doloremque? Maiores in temporibus soluta laudantium esse recusandae, consequatur eius a pariatur aut dolorem voluptas, saepe nostrum porro provident quaerat quisquam impedit! Quas commodi facilis sunt modi. Laborum fuga vitae dignissimos tenetur quaerat laudantium facilis quam doloribus, repellat corrupti soluta magni voluptate animi aspernatur ex illo repellendus aliquid. Quos autem, corrupti dolorum, corporis quibusdam veniam vitae pariatur perferendis iure ducimus nam nesciunt optio illo, ex animi magni. Cumque in, magni reprehenderit temporibus commodi odio, animi porro quisquam quia itaque numquam. Ad incidunt, cumque voluptatem est quidem corrupti doloribus rem excepturi voluptate fuga laboriosam alias a aperiam necessitatibus pariatur officia delectus tempore libero vero debitis? Quaerat quos maiores in provident veritatis? Amet harum cupiditate tempora ab ratione minima?</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </section>
//     </>
//   )
// }

// export default ProductDetail
