/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './components/requireAuth';
import { NavbarBanner } from './components/Navbar/NavbarBanner';
import { Suspense, createContext, lazy, useContext, useEffect, useState } from 'react';
import { ProfileInterface } from './services/interfaces/Profile';
import { ContactInterface } from './services/interfaces/Contact';
import { User } from './services/interfaces/User';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const PrivateRoute = lazy(() => import('./services/utils/PrivateRoute'));
const ConfidentialityPage = lazy(() => import('./pages/Confidentiality/ConfidentialityPage'));
const LegalPage = lazy(() => import('./pages/Legal/LegalPage'));
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'));
const UserManagement = lazy(() => import('./pages/User/UserManagement'));
const UserProfilePage = lazy(() => import('./pages/User/UserProfilePage'));
const UserEditProfilePage = lazy(() => import('./pages/User/UserEditProfilePage'));
const CalendarPage = lazy(() => import('./pages/Calendar/CalendarPage'));
const MapPage = lazy(() => import('./pages/Map/MapPage'));
const AdsListPage = lazy(() => import('./pages/Ads/AdsListPage'));
const AdsListPageLists = lazy(() => import('./pages/Ads/AdsListPageLists'));
const NotFoundPage = lazy(() => import('./services/utils/NotFoundPage'));
const LoginPage = lazy(() => import('./pages/Auth/LoginPage'));
const FilesPage = lazy(() => import('./pages/Files/FilesPage'));
const ChatPage = lazy(() => import('./pages/Chat/ChatPage'));
const ClientAdminCreatePage = lazy(() => import('./pages/User/ClientAdminCreatePage'));
const AdsEditPage = lazy(() => import('./pages/Ads/AdsEditPage'));
const AdCreatePage = lazy(() => import('./pages/Ads/AdsCreatePage'));
const AdSubscriptionPage = lazy(() => import('./pages/Ads/AdSubscriptionPage'));
const AdsDetailPage = lazy(() => import('./pages/Ads/AdsDetailPage'));
const ForgotPswdPage = lazy(() => import('./pages/Auth/ForgotPswd'));
const FooterNav = lazy(() => import('./components/Footer/FooterNav'));
const SiteMapPage = lazy(() => import('./components/SiteMap/SiteMap'));
const Error404Page = lazy(() => import('./components/ErrorPages/Error404'));
const Error418Page = lazy(() => import('./components/ErrorPages/Error418'));

// Context for authentication
const AuthContext = createContext<{ isConnected: boolean; setIsConnected: (value: boolean) => void } | null>(null);

// Hook to use authentication context
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthContextProvider');
  return context;
};

console.log('useAuth', useAuth);

function App() {

  // Authentication State and Synchronization
  const [isConnected, setIsConnected] = useState<boolean>(() => {
    return localStorage.getItem('isConnected') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isConnected', String(isConnected));
  }, [isConnected]);
  
  const [profiles, setProfiles] = useState<ProfileInterface[]>([]);
  const [contactForms, setContactForms] = useState<ContactInterface[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  function handleSubmitProfile(profile: ProfileInterface): void {
    setProfiles([...profiles, profile]);
  }

  function handleSubmitContactForm(contactForm: ContactInterface): void {
    setContactForms([...contactForms, contactForm]);
  }

  return (
    <AuthContext.Provider value={{ isConnected, setIsConnected }}>
      {isConnected && (
        <>
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <NavbarBanner />
        </>
      )}
      <Routes>
        <Route path="/" element=
          {
          <Suspense fallback={<div>Chargement...</div>}>
            <LoginPage setIsConnected={setIsConnected} />
          </Suspense>
          }
        />
        <Route path="/login" element=
          {
          <Suspense fallback={<div>Chargement...</div>}>
            <LoginPage setIsConnected={setIsConnected} />
          </Suspense>
          }
        />

        <Route path="/forgot-password-page" element=
          {
          <Suspense fallback={<div>Chargement...</div>}>
            <ForgotPswdPage handleSubmitUser={(_user: User) => { /* Implémentation */ }} />
          </Suspense>
          }
        />
        <Route path="/createAdmin" element=
          {
          <Suspense fallback={<div>Chargement...</div>}>
            <ClientAdminCreatePage handleSubmitUser={(_user: User) => { /* Implémentation */ }}/>
          </Suspense>
          }
        />
        <Route element={<PrivateRoute />}>
          <Route element={<RequireAuth allowedRoles={["admin"]} />}>
          <Route path="/users-handling" element=
          {
            <Suspense fallback={<div>Chargement...</div>}>
              <UserManagement handleSubmitUser={(_user: User) => { /* Implémentation */ }} />
            </Suspense>
          }
          />
          </Route>
          
          <Route path="/my-account" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <UserProfilePage />
            </Suspense>
            }
          />
          <Route path="/edit-my-profile/:idProfile" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <UserEditProfilePage handleSubmitProfile={handleSubmitProfile}  />
            </Suspense>
            }
          />
          <Route path="/ad/:idAd" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <AdsDetailPage />
            </Suspense>
            }
          />
          <Route path="/my-ads/:idUser" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <AdSubscriptionPage />
            </Suspense>
            }
          />
          <Route path="/new-ad" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <AdCreatePage />
            </Suspense>
            }
          />
          <Route path="/edit-ad/:adId" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <AdsEditPage />
            </Suspense>
            }
          />
          <Route path="/calendar" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <CalendarPage searchQuery={searchQuery} />
            </Suspense>
            }
          />
          <Route path="/files" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <FilesPage />
            </Suspense>
            }
          />
          <Route path="/chat" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <ChatPage />
            </Suspense>
            }
          />
          <Route path="/map" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <MapPage searchQuery={searchQuery} />
            </Suspense>
            }
          />
          <Route path="/confidentiality" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <ConfidentialityPage />
            </Suspense>
            }
          />
          <Route path="/legal" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <LegalPage />
            </Suspense>
            }
          />
          <Route path="/contact" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <ContactPage  handleSubmitContactForm={handleSubmitContactForm} />
            </Suspense>
            }
          />
          <Route path="/ads-grid" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <AdsListPage searchQuery={searchQuery} />
            </Suspense>
            }
          />
          <Route path="/ads-list" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <AdsListPageLists searchQuery={searchQuery} />
            </Suspense>
            }
          />
          <Route path="/sitemap" element=
            {
            <Suspense fallback={<div>Chargement...</div>}>
              <SiteMapPage />
            </Suspense>
            }
          />
        </Route>
      
        <Route path="*" element=
          {
          <Suspense fallback={<div>Chargement...</div>}>
            <NotFoundPage />
          </Suspense>
          }
        />
        <Route path="/404" element=
          {
          <Suspense fallback={<div>Chargement...</div>}>
            <Error404Page />
          </Suspense>
          }
        />
        <Route path="/418" element=
          {
          <Suspense fallback={<div>Chargement...</div>}>
            <Error418Page />
          </Suspense>
          }
        />
      </Routes>
      <FooterNav />
    </AuthContext.Provider>
  );
}

export default App;