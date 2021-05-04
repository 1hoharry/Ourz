import Link from "next/link"; // Dynamic routing
import { useState } from "react"; // State management
import { web3 } from "./../containers/index.js"; // Global state
//import styles from "@styles/components/Header.module.scss"; // Component styles

// Header
export default function Header() {
  const [loading, setLoading] = useState(false); // Loading state
  const { address, authenticate } = web3.useContainer(); // Global state

  const authenticateWithLoading = async () => {
    setLoading(true); // Toggle loading
    await authenticate(); // Authenticate
    setLoading(false); // Toggle loading
  };

  return (
    <div>
      {/* Logo */}
      <div>
        <Link href="/">
          <a>
            <img src="/logo_orb.png" alt="Zora" />
          </a>
        </Link>
      </div>

      {/* Menu */}
      <div>
        {address ? (
          // If user is authenticated
          <>
            <Link href={`/profile/${address}`}>
              <a>
                {address.substr(0, 5) +
                  "..." +
                  address.slice(address.length - 5)}
              </a>
            </Link>
            <Link href={`/create`}>
              <a>Create</a>
            </Link>
          </>
        ) : (
          // Else if user is not authenticated
          <button
            onClick={authenticateWithLoading}
            disabled={loading}
          >
            {loading ? "Connecting..." : "Connect"}
          </button>
        )}
      </div>
    </div>
  );
}
