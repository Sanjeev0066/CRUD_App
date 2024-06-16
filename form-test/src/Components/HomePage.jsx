import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <nav>
        <span>
          <ul>
            <Link to="/">
              <button>
                <li>home</li>
              </button>
            </Link>

            <Link to="/add">
              <button>
                <li>add</li>
              </button>
            </Link>

            <Link to="/update">
              <button>
                <li>update</li>
              </button>
            </Link>
            <Link to="/delete">
              <button>
                <li>delete</li>
              </button>
            </Link>
          </ul>
        </span>
      </nav>
    </div>
  );
}
