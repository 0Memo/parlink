import fakeProfile from '../../pages/User/profileFaker';

export async function getProfiles() {
    try {
        return fakeProfile;
    } catch (error) {
        console.log(error)
    }
}