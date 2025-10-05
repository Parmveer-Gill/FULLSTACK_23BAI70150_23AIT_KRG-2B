export default function DisplayForm({ comments }) {
    return (
        <div>
            <h2>All Info :</h2>
            {comments.map((comment, idx) => (
                <div className="comment" key={idx}>
                    <span>Full Name : {comment.fullName}</span>
                    <br />
                    <span>Username : {comment.username}</span>
                    <hr />
                </div>
            ))}
        </div>
    );
}
