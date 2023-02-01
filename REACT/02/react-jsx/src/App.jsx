/** {} - otvaraju javascript i mora ići return
 * () - otvaraju jsx
 * => 1 naredba odma iza strelice želimo vratiti naredbu ne trebaju zagrade
 * => ako su dva ili više elementa moraju ići zagrade () da znamo početak i kraj
 */

const App = () => {
    const isLogedIn = true;

    const names = ["Ana", "Iva", "Ivo", "Mirko"];

    return (
        <>
            <div>
                {/* ako želim JS onda {} */}
                {isLogedIn && <button>Log out</button>}
                {!isLogedIn && <button>Log in</button>}
            </div>
            <div>
                {isLogedIn ? <button>Log out</button> : <button>Log in</button>}
            </div>
            <div>
                {names.map((names, index) => (
                    <p>Hello {names}!</p>
                ))}
            </div>
        </>
    );
};

export default App;
