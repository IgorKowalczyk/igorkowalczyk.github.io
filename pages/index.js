import Container from "@components/Container";

export default function main() {
 return (
  <Container>
   <div className="-mt-24 flex min-h-screen flex-1 flex-col items-center justify-center bg-white dark:bg-[#040d21]">
    <div className="rounded-[10px] border-[1px] border-black/[15%] bg-gradient-to-r p-[30px] dark:border-white/[15%] dark:from-[#a2facf09] dark:to-[#64acff0d]">
     <h1 className="dark: color-black mx-0 mt-0 bg-gradient-to-r bg-clip-text font-poppins text-[3rem] font-semibold dark:from-[#a2facf] dark:to-[#64acff] dark:box-decoration-clone dark:text-fill-transparent">Igor Kowalczyk - Soon!</h1>
    </div>
   </div>
  </Container>
 );
}
