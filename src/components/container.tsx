const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className='max-w-[1100px] min-h-screen flex flex-col mx-auto bg-zinc-50 border-l border-r'>
            {children}
        </div>
    )
}

export default Container