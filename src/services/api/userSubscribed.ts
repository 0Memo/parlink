import fakeAdSubscription from '../../pages/Ads/fakerAdSubscription';

export async function getSubscribedProfiles() {
    try {
        return fakeAdSubscription;
    } catch (error) {
        console.log(error)
    }
}