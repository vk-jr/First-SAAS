import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        document.addEventListener('mousemove', updatePosition);

        // Add listeners to all interactive elements
        const addHoverListeners = () => {
            const interactiveElements = document.querySelectorAll('a, button, .interactive, input, textarea');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        addHoverListeners();

        // Re-add listeners when DOM changes (simple observer)
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.removeEventListener('mousemove', updatePosition);
            observer.disconnect();
            const interactiveElements = document.querySelectorAll('a, button, .interactive, input, textarea');
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Dot */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: isHovering ? 'transparent' : '#8c82ff',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
                    zIndex: 9999,
                    transition: 'width 0.2s, height 0.2s, background-color 0.2s',
                }}
            />

            {/* Outer Circle / Hover Effect */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: isHovering ? '60px' : '40px',
                    height: isHovering ? '60px' : '40px',
                    border: '1px solid rgba(140, 130, 255, 0.5)',
                    backgroundColor: isHovering ? 'rgba(140, 130, 255, 0.1)' : 'transparent',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    transform: `translate(${position.x - (isHovering ? 30 : 20)}px, ${position.y - (isHovering ? 30 : 20)}px)`,
                    zIndex: 9998,
                    transition: 'width 0.3s ease-out, height 0.3s ease-out, transform 0.1s ease-out, background-color 0.3s',
                    mixBlendMode: 'difference'
                }}
            />
        </>
    );
};

export default Cursor;
