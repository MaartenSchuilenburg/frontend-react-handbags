const Title = ({ title, paragraph, img }) => {
  return (
    <section>
        
      {img && <img src={img} alt="logo" />}
      {title && <h2>{title}</h2>}
      {paragraph && <p>{paragraph}</p>}
    </section>


        // <section>
        //   <h2>Our Story</h2>
        //   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        // </section>
  );
};
export default Title;
