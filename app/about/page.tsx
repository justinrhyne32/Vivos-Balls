import BrandStory from '@/components/BrandStory'
import Timeline from '@/components/Timeline'

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-4 neon-text text-center">
          About Vivo&apos;s Balls
        </h1>
        <p className="text-xl text-gray-400 text-center mb-16">
          Quality, value, and premium golf balls for every player
        </p>
        <BrandStory />
        <Timeline />
      </div>
    </div>
  )
}



