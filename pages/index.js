import InfoCard from '../components/InfoCard'
import GalleryCard from '../components/GalleryCard'

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-center p-12">
      <div className="max-w-[1200px] w-full flex justify-center">
        <div className="w-full max-w-xl">
          <InfoCard />
          <GalleryCard />
        </div>
      </div>
    </div>
  )
}
