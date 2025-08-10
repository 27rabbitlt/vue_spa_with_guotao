<template>
    <section id="testimonial" class="testimonial-section">
        <div class="container">
            <h2 class="section-title">What Our Customers Say</h2>
            <p class="section-subtitle">Real feedback from ebike enthusiasts</p>
            
            <div class="testimonials-container">
                <!-- First Testimonial - Avatar on Left -->
                <div class="testimonial-item testimonial-left">
                    <div class="avatar-container">
                        <div class="avatar">
                            <svg viewBox="0 0 100 100" class="default-avatar">
                                <circle cx="50" cy="35" r="20" fill="#e5e7eb"/>
                                <circle cx="50" cy="100" r="45" fill="#e5e7eb"/>
                            </svg>
                        </div>
                    </div>
                    <div class="testimonial-content">
                        <div class="quote-icon">"</div>
                        <p class="testimonial-text">
                            The ebike has completely transformed my daily commute. It's not just eco-friendly, 
                            but also incredibly fun to ride. The battery life exceeds my expectations, and 
                            the smooth electric assist makes hills feel like flat roads. Highly recommended!
                        </p>
                        <div class="customer-info">
                            <h4 class="customer-name">Sarah Johnson</h4>
                            <p class="customer-title">Daily Commuter</p>
                        </div>
                    </div>
                </div>

                <!-- Second Testimonial - Avatar on Right -->
                <div class="testimonial-item testimonial-right">
                    <div class="testimonial-content">
                        <div class="quote-icon">"</div>
                        <p class="testimonial-text">
                            As a delivery driver, I needed something reliable and efficient. This ebike 
                            has been a game-changer for my business. The cargo capacity is impressive, 
                            and the electric motor helps me cover more ground without getting exhausted. 
                            It's paid for itself in just a few months!
                        </p>
                        <div class="customer-info">
                            <h4 class="customer-name">Michael Chen</h4>
                            <p class="customer-title">Delivery Professional</p>
                        </div>
                    </div>
                    <div class="avatar-container">
                        <div class="avatar">
                            <svg viewBox="0 0 100 100" class="default-avatar">
                                <circle cx="50" cy="35" r="20" fill="#d1d5db"/>
                                <circle cx="50" cy="100" r="45" fill="#d1d5db"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No additional logic needed for this static component
</script>

<style scoped>
.testimonial-section {
    padding: 80px 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 16px;
}

.section-subtitle {
    text-align: center;
    font-size: 1.125rem;
    color: #64748b;
    margin-bottom: 60px;
}

.testimonials-container {
    display: flex;
    flex-direction: column;
    gap: 60px;
}

.testimonial-item {
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 40px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.testimonial-left {
    flex-direction: row;
}

.testimonial-right {
    flex-direction: row-reverse;
}

.avatar-container {
    flex-shrink: 0;
}

.avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid #e2e8f0;
}

.default-avatar {
    width: 60px;
    height: 60px;
}

.testimonial-content {
    flex: 1;
    position: relative;
}

.quote-icon {
    font-size: 4rem;
    color: #3b82f6;
    font-family: Georgia, serif;
    line-height: 1;
    margin-bottom: 16px;
}

.testimonial-text {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #374151;
    margin-bottom: 24px;
    font-style: italic;
}

.customer-info {
    border-top: 1px solid #e5e7eb;
    padding-top: 20px;
}

.customer-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 4px;
}

.customer-title {
    font-size: 0.875rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

/* Responsive Design */
@media (max-width: 768px) {
    .testimonial-section {
        padding: 60px 0;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .testimonial-item {
        flex-direction: column !important;
        text-align: center;
        gap: 24px;
        padding: 30px 20px;
    }
    
    .avatar {
        width: 60px;
        height: 60px;
    }
    
    .default-avatar {
        width: 40px;
        height: 40px;
    }
    
    .testimonial-text {
        font-size: 1rem;
    }
}
</style>
