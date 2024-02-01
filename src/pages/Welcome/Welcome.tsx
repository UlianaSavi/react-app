import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import { ROUTES } from '../../constants';

export const Welcome = () => {
    let navigate = useNavigate(); 
    const goToHomePage = () =>{ 
      navigate(ROUTES.home);
    }

    return (
      <div className="welcome">
        <h2>Welcome to our app!</h2>
        <p>For start work with GitHub GraphQL API click the button under:</p>
        <button className="btn" onClick={goToHomePage}>Start</button>
      </div>
    );
}
  