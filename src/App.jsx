import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/giovanesantosdev/repos?per_page=30&sort=updated')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
      })
      .catch(err => console.error('Erro ao buscar repos:', err));
  }, []);

  const links = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/giovanesantosjunior/',
      icon: <FaLinkedin size={22} />,
      label: 'Conectar no LinkedIn',
      description: 'Minha rede profissional e carreira'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/giovanesantosdev',
      icon: <FaGithub size={22} />,
      label: 'Ver Projetos',
      description: 'Meus repositórios e código aberto'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/giorno.giovane/',
      icon: <FaInstagram size={22} />,
      label: 'Seguir no Instagram',
      description: 'Um pouco do meu dia a dia'
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="background-mesh"></div>

      {/* Fundo com projetos do GitHub */}
      <div className="github-bg-container" aria-hidden="true">
        {repos.map((repo) => (
          <div key={repo.id} className="github-project-item">
            <span className="github-project-name">{repo.name}</span>
            {repo.description && (
              <span className="github-project-desc">
                {repo.description.length > 60
                  ? repo.description.substring(0, 60) + '...'
                  : repo.description}
              </span>
            )}
            <span className="github-project-lang">
              {repo.language || 'Code'}
            </span>
          </div>
        ))}
      </div>

      <header className="profile-section">
        <div className="profile-image-container">
          <img
            src="/profile.jpg"
            alt="Giovane Dos Santos Junior"
            className="profile-image"
          />
        </div>

        <div className="status-badge">
          <div className="status-dot"></div>
          Disponível para novos projetos
        </div>

        <div className="profile-info">
          <h1>Giovane Dos Santos Junior</h1>
          <p>
            Desenvolvedor de Software<br />
            <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>
              Transformando ideias em código de alto impacto
            </span>
          </p>
        </div>
      </header>

      <main className="links-container">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            <div className="link-content">
              <div className="link-icon-box">
                {link.icon}
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '2px' }}>{link.name}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{link.description}</p>
              </div>
            </div>
            <FiArrowUpRight size={20} className="external-icon" />
          </a>
        ))}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} • Giovane Dos Santos Junior</p>
      </footer>
    </div>
  );
}

export default App;
