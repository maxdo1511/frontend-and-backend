export default function Nav() {
    return (
        <>
            <nav className={"w-full text-black pl-8 flex flex-row gap-3 cursor-pointer bg-gray-300 p-3"}>
                <ul className={"w-full flex flex-row gap-3"}>
                    <li className={"flex flex-row gap-3"}>
                        <a href="/Tic-Tac-Toe" className="hover:underline"><i
                            data-feather="home"></i><span>Tic-Tac-Toe</span></a>
                        <a href="/multi-step-form" className="hover:underline"><i
                            data-feather="home"></i><span>multi-step-form</span></a>
                        <a href="/todo-list" className="hover:underline"><i
                            data-feather="home"></i><span>todo-list</span></a>
                    </li>
                </ul>
            </nav>
        </>
    )
}