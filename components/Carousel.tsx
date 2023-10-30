
export default function Carousel() {
  return (
    <>
      {/*banner section start */}

      <div className="banner_section layout_padding">
        <div className="container-fluid">
          <section className="slide-wrapper">
            <div className="container-fluid">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#myCarousel" data-slide-to={1} />
                  <li data-target="#myCarousel" data-slide-to={2} />
                  <li data-target="#myCarousel" data-slide-to={3} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <h1 className="banner_taital">Paraíso Distribuidora</h1>
                      <p className="banner_text">
                        <img src="https://i0.wp.com/template.tagbdigital.com.br/wp-content/uploads/2023/03/image-removebg-preview.png?fit=127%2C59&ssl=1" />
                        Atuando a +5 ano s no Mercado
                      </p>
                      <div className="btn_main">
                        <div className="contact_bt">
                          <a href="#">Contact Us</a>
                        </div>
                        <div className="readmore_bt active">
                          <a href="#">Read More</a>
                        </div>
                      </div>
                      <div className="number_text">01</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <h1 className="banner_taital">Paraíso Distribuidora</h1>
                      <p className="banner_text">
                        <img src="https://i0.wp.com/template.tagbdigital.com.br/wp-content/uploads/2023/03/image-removebg-preview.png?fit=127%2C59&ssl=1" />
                        Atuando a +5 ano s no Mercado
                      </p>
                      <div className="btn_main">
                        <div className="contact_bt">
                          <a href="#">Contact Us</a>
                        </div>
                        <div className="readmore_bt active">
                          <a href="#">Read More</a>
                        </div>
                      </div>
                      <div className="number_text">02</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <h1 className="banner_taital">Paraíso Distribuidora</h1>
                      <p className="banner_text">
                        <img src="https://i0.wp.com/template.tagbdigital.com.br/wp-content/uploads/2023/03/image-removebg-preview.png?fit=127%2C59&ssl=1" />
                        Atuando a +5 ano s no Mercado
                      </p>
                      <div className="btn_main">
                        <div className="contact_bt">
                          <a href="#">Contact Us</a>
                        </div>
                        <div className="readmore_bt active">
                          <a href="#">Read More</a>
                        </div>
                      </div>
                      <div className="number_text">03</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <h1 className="banner_taital">Paraíso Distribuidora</h1>
                      <p className="banner_text">
                        <img src="https://i0.wp.com/template.tagbdigital.com.br/wp-content/uploads/2023/03/image-removebg-preview.png?fit=127%2C59&ssl=1" />
                        Atuando a +5 ano s no Mercado
                      </p>
                      <div className="btn_main">
                        <div className="contact_bt">
                          <a href="#">Contact Us</a>
                        </div>
                        <div className="readmore_bt active">
                          <a href="#">Read More</a>
                        </div>
                      </div>
                      <div className="number_text">04</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <h1 className="banner_taital">Paraíso Distribuidora</h1>
                      <p className="banner_text">
                        <img src="https://i0.wp.com/template.tagbdigital.com.br/wp-content/uploads/2023/03/image-removebg-preview.png?fit=127%2C59&ssl=1" />
                        Atuando a +5 ano s no Mercado
                      </p>
                      <div className="btn_main">
                        <div className="contact_bt">
                          <a href="#">Contact Us</a>
                        </div>
                        <div className="readmore_bt active">
                          <a href="#">Read More</a>
                        </div>
                      </div>
                      <div className="number_text">05</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/*banner section end */}
    </>
   
  )
}