<template>
    <section id="testimonial" class="testimonial-section">
        <div class="container">
            <h2 class="section-title">What Our Customers Say</h2>
            <p class="section-subtitle">Real feedback from ebike enthusiasts</p>
            
            <div class="testimonials-container">
                <!-- First Testimonial - Avatar on Left -->
                <div class="testimonial-item testimonial-left">
                    <div class="avatar-container">
                        <img :src="karenTapulaImage" alt="Karen Tapula" class="avatar-image" />
                    </div>
                    <div class="testimonial-content">
                        <div class="quote-icon">"</div>
                        <p class="testimonial-text">
                            I have had my bike for over a year now and I must say that it has been one of the best choices I've ever made. It's smooth on the road and the battery is both durable and reliable. Maintenance is very minimal. I only fixed my indicator and brakes once.
                            With all the traffic in Lusaka.It helps me move much faster and I don't spend on fuel at all. It's very convenient and cost effective. I am very happy with it.

                        </p>
                        <div class="customer-info">
                            <h4 class="customer-name">Karen Tapula</h4>
                            <p class="customer-title">Personal Customers</p>
                        </div>
                    </div>
                </div>

                <!-- Second Testimonial - Avatar on Right -->
                <div class="testimonial-item testimonial-right">
                    <div class="testimonial-content">
                        <div class="quote-icon">"</div>
                        <p class="testimonial-text">
                            Last year, Holland Greentech purchased 8 electric bikes from E-Ride to support our sales agents in rural Zambia. After a year, we’re very glad with our choice. The bikes and their batteries have proven reliable, with enough range to reach even remote farmers, carrying a spare battery doubles the distance.
                            Compared to petrol bikes, we’ve eliminated fuel misuse, tedious receipt tracking, and cut costs. The in-built GPS also gives us clear oversight of bike usage and agent movements.
                            The future is electric!

                        </p>
                        <div class="customer-info">
                            <h4 class="customer-name">Bram de Vries</h4>
                            <p class="customer-title">Holland Greentech Consultant</p>
                        </div>
                    </div>
                    <div class="avatar-container">
                        <img :src="bramImage" alt="Bram de Vries" class="avatar-image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import karenTapulaImage from '@/assets/img/karen_tapula.jpg'
import bramImage from '@/assets/img/bram.jpg'
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

.avatar-image {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
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
    
    .avatar-image {
        width: 120px;
        height: 120px;
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
