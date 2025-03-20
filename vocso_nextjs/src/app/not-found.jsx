import Image from "next/image"
export default function NotFound(){
    return(
        <div className="h-screen flex justify-center items-center">
            <Image height={500} width={500} src='/notfound.png' alt='notfound' />
        </div>
    )
}