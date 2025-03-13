import Copyrights from '../ui/copyrights';
import MissionAndResources from '../ui/missionAndResources';
import SubscriptionAndSocials from '../ui/subscriptionAndSocial';

export default function Footer() {
    return (
            <footer className="flex flex-col gap-50 flex-wrap items-start justify-center">
                <MissionAndResources />

                <SubscriptionAndSocials />

                <Copyrights />
            </footer>
    )
}