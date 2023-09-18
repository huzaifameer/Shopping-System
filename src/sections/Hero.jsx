import Button from "../components/Button"


const Hero = () => {
  return (
    <section id="home" className="w-full flex
    xl:flex-row flex-col justify-center min-h-screen
    gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Product Collection</p>
        <h1>
          <span>The New Arrival</span><br />
          <span>Nike</span>
          <span>Shoes</span>
        </h1>
        <p>Elevate your wardrobe with our exquisite designs, a canvas for your self-expression.</p>
        <Button />
      </div>
    </section>
  )
}

export default Hero