import Image from 'next/image'
import cat from '../assets/cat.webp'

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <Image src={cat} alt="cat" />
}
