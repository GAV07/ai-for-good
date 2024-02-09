import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter sm:text-7xl">
            <span className="sr-only">AI For Good - </span>AI for Good Pitch Competition
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight">
            <p>
            Are you a trailblazing AI company in Healthcare, Finance, Climate, or Media? Do you have an innovative solution that's ready to disrupt industries? Here's your chance to shine!
            </p>
            <p>
            Join us for an electrifying pitch competition, where the spotlight is on you and your groundbreaking AI solutions. Venture Miami and AWS are partnering to bring you an unparalleled opportunity to showcase your talent, connect with industry experts, and propel your company to new heights.
            </p>
          </div>
          <Button href="https://airtable.com/appU24wxHJtwLEMq4/pag8wWoKznPYsAOxA/form" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Founders Pitching', '8'],
              ['Location', 'Miami, FL'],
              ['Venue', 'TBD'],
              ['Date', 'April 2nd, 2024'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-grey-800">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
