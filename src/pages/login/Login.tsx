import { useContext, useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import Search from '../../components/Search/Search';
import { Profile } from '../../context/UserContext.props';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export function Login() {

  const { setCurrentProfile } = useContext(UserContext);

  const searchRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate()

  const [userName, setUserName] = useState('');

  const handleLogin = () => {
    if (!userName.trim()) return;
    const profiles: Profile[] = JSON.parse(localStorage.getItem('profiles') || '[]');
    const existing = profiles.find((p) => p.name === userName.trim());

    console.log(profiles);

    if (!existing) {
      profiles.push({ name: userName.trim(), isLogined: true });
    } else {
      existing.isLogined = true;
    }
    localStorage.setItem('profiles', JSON.stringify(profiles));

    setCurrentProfile(userName.trim());
    setUserName('');
    navigate('/')
  };

  return (
    <>
      <h3>Вход</h3>
      <Search ref={searchRef} value={userName} onChange={setUserName} placeholder="Введите имя"></Search>
      <br></br>
      <Button ref={inputRef} onClick={handleLogin} text={'Войти в профиль'} />
    </>
  );
}
