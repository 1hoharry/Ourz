import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

// export const useInactiveListener = (router) => {
//   const { active, error, activate, deactivate } = useWeb3React();

//   useEffect(() => {
//     const { ethereum } = window;
//     if (ethereum && ethereum.on && !active && !error) {
      
//       const handleDisconnect = error => {
//         console.log("Handing 'disconnect' event, message:", error.message);
//         deactivate(injected);
//         router.push("/");
//       }

//       ethereum.on("disconnect", handleDisconnect);

//       return () => {
//         if (ethereum.removeListener) {
//           ethereum.removeListener("disconnect", handleDisconnect);
//         }
//       };
//     }
//   }, [active, error, activate, deactivate]);
// };

// export const useInactiveListener = () => {
//   const { active, error, activate } = useWeb3React();

//   useEffect(() => {
//     const { ethereum } = window;
//     console.log(ethereum);
//     console.log(ethereum.on);
//     if (ethereum && ethereum.on && !active && !error) {
//       const handleConnect = () => {
//         console.log("Handling 'connect' event");
//         activate(injected);
//       };
//       const handleChainChanged = (chainId) => {
//         console.log("Handling 'chainChanged' event with payload", chainId);
//         activate(injected);
//       };
//       const handleAccountsChanged = (accounts) => {
//         console.log("Handling 'accountsChanged' event with payload", accounts);
//         if (accounts.length > 0) {
//           activate(injected);
//         }
//       };
//       const handleNetworkChanged = (networkId) => {
//         console.log("Handling 'networkChanged' event with payload", networkId);
//         activate(injected);
//       };

//       ethereum.on("connect", handleConnect);
//       ethereum.on("chainChanged", handleChainChanged);
//       ethereum.on("accountsChanged", handleAccountsChanged);
//       ethereum.on("networkChanged", handleNetworkChanged);

//       return () => {
//         if (ethereum.removeListener) {
//           ethereum.removeListener("connect", handleConnect);
//           ethereum.removeListener("chainChanged", handleChainChanged);
//           ethereum.removeListener("accountsChanged", handleAccountsChanged);
//           ethereum.removeListener("networkChanged", handleNetworkChanged);
//         }
//       };
//     }
//   }, [active, error, activate]);
// };
