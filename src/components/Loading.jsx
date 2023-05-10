import ReactLoading from "react-loading";

export function Loading() {
    return (
        <div
            className="flex justify-center items-center"
            style={{ width: "100%", height: "100vh" }}
        >
            <ReactLoading
                type="spinningBubbles"
                color="var(--clr-primary-500)"
            />
        </div>
    );
}
