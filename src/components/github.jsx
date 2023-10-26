import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GoHubot } from "react-icons/go";
import { FaTired } from "react-icons/fa";


const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Replace 'YOUR_GITHUB_API_LINK' with the provided GitHub API link.
    const apiLink = 'https://api.github.com/users/Lakszy/repos';

    if (isOpen) {
      axios
        .get(apiLink)
        .then((response) => {
          setRepos(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data from GitHub:', error);
          setIsLoading(false);
        });
    }
  }, [isOpen]);

  return (
    <div className="bg-gray-900 mt-10 mb-10 p-8 rounded-lg shadow-lg">
      <div className="text-center text-xl lg:text-3xl">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`font-semibold mb-4 hover:underline ${isOpen ? 'text-red-500' : 'text-blue-500'}`}
        >
          {isOpen ? (
            <>
              Hide Repositories <FaTired className="inline" />
            </>
          ) : (
            <>
              Show Repositories <GoHubot className="inline" />
            </>
          )}
        </button>
      </div>
      {isOpen && (
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">My GitHub Repositories</h2>
          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo) => (
                <li
                  key={repo.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
                >
                  <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
                  <p className="text-gray-400">{repo.description}</p>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-500 mt-2 hover:underline"
                  >
                    View on GitHub
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default GitHubRepos;
