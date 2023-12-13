import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export default function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        {/* <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        /> */}
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <div>
                <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
                >                
                    Managing Director, Terranz Dubai, UAE
                    James Joseph
                    Managing Director, Terranz Dubai, UAE
                    We are pleased to express our satisfaction with the collaboration with Ombrulla for the execution of scratch and damage detection in cars. We extend our heartfelt gratitude to Ombrulla for their invaluable support throughout this project.
                </Typography>
                <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                    Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                    Gallery
                </Button>
                </div>
                
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <div className="absolute inset-0 grid h-full w-full items-center bg-transparent">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32" style={{width:"90%",height:"90%",display:"flex",justifyContent:"center",gap:"2rem"}}>
            <div style={{border:"1px solid black",background:"white",padding:"2rem",borderRadius:"2% 2% 0% 0%"}}>
                <Typography
                variant="lead"
                color="black"
                className="mb-12 opacity-80"
                style={{fontSize:"15px"}}
                >
                    Managing Director, Terranz Dubai, UAE
                    James Joseph
                    Managing Director, Terranz Dubai, UAE
                    We are pleased to express our satisfaction with the collaboration with Ombrulla for the execution of scratch and damage detection in cars. We extend our heartfelt gratitude to Ombrulla for their invaluable support throughout this project.
                </Typography>
                <div className="flex gap-2">
                <Button size="lg" color="black">
                    Explore
                </Button>
                <Button size="lg" color="black" variant="text">
                    Gallery
                </Button>
                </div>
            </div>

            <div style={{border:"1px solid black",background:"white",padding:"2rem",borderRadius:"2% 2% 0% 0%"}}>
                <Typography
                variant="lead"
                color="black"
                className="mb-12 opacity-80"
                style={{fontSize:"15px"}}
                >
                Managing Director, Terranz Dubai, UAE
                    James Joseph
                    Managing Director, Terranz Dubai, UAE
                    We are pleased to express our satisfaction with the collaboration with Ombrulla for the execution of scratch and damage detection in cars. We extend our heartfelt gratitude to Ombrulla for their invaluable support throughout this project.
                </Typography>
                <div className="flex">
                    <div>
                    <img style={{width:"30%",borderRadius:"3rem"}} src="https://www.ombrulla.com/_astro/shipcom.ee1ba5d2_o18LH.webp" alt="" />
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <p>Vinod</p>
                        <p>Managing Director</p>
                    </div>
                </div>
                </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}