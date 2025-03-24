import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/main.css';

const Sidebar: React.FC = () => {
  const [lessons, setLessons] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  
  useEffect(() => {
    // In a real implementation, fetch lessons from API
    setLessons([
      { id: 1, title: 'General', lessons: [
        { id: 101, title: 'WebGoat Introduction', path: '/introduction', completed: false },
        { id: 102, title: 'HTTP Basics', path: '/http-basics', completed: false }
      ]},
      { id: 2, title: 'Authentication', lessons: [
        { id: 201, title: 'Password Reset', path: '/password-reset', completed: false },
        { id: 202, title: 'JWT', path: '/jwt', completed: false }
      ]},
      { id: 3, title: 'Injection Flaws', lessons: [
        { id: 301, title: 'SQL Injection', path: '/sql-injection', completed: false },
        { id: 302, title: 'Command Injection', path: '/command-injection', completed: false }
      ]},
      { id: 4, title: 'Cross-Site Scripting (XSS)', lessons: [
        { id: 401, title: 'Reflected XSS', path: '/reflected-xss', completed: false },
        { id: 402, title: 'Stored XSS', path: '/stored-xss', completed: false }
      ]}
    ]);
  }, []);
  
  const toggleCategory = (categoryId: number) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryId);
    }
  };
  
  return (
    <aside className="sidebar">
      <div id="menu-container">
        <ul>
          {lessons.map((category) => (
            <li key={category.id} className={activeCategory === category.id ? 'active' : ''}>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                toggleCategory(category.id);
              }}>
                <i className={`fa ${activeCategory === category.id ? 'fa-angle-down' : 'fa-angle-right'}`}></i> {category.title}
              </a>
              <ul>
                {category.lessons.map((lesson: any) => (
                  <li key={lesson.id}>
                    <Link to={lesson.path}>
                      {lesson.title}
                      {lesson.completed && (
                        <span className="lesson-complete">
                          <i className="fa fa-check"></i>
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
