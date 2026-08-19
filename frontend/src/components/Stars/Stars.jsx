import "./Stars.css"

const stars = Array.from({ length: 70 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
}));

export default function StarBackground() {
    return (
        <div className="stars">
            {stars.map((star) => (
                <span
                    key={star.id}
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                />
            ))}
        </div>
    )
}