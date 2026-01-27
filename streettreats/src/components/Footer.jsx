import React from 'react'
import { ShoppingCart, LocalOffer, AccessTime, LocationOn, HelpOutline } from '@mui/icons-material'

function Footer() {
  return (
    <footer className="footer">
      <div className="container py-4">
        <div className="row">

          {/* Cart Section */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h6 className="footer-title">
              <ShoppingCart fontSize="small" /> Cart
            </h6>
            <p className="footer-text">0 items added</p>
            <p className="footer-text muted">Start exploring street food</p>
          </div>

          {/* Coupons */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h6 className="footer-title">
              <LocalOffer fontSize="small" /> Coupons
            </h6>
            <p className="footer-text">Apply promo codes</p>
            <div className="coupon-box">
              STREET10
            </div>
          </div>

          {/* Timings */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h6 className="footer-title">
              <AccessTime fontSize="small" /> Timings
            </h6>
            <p className="footer-text">Mon – Sun</p>
            <p className="footer-text">10:00 AM – 11:00 PM</p>
          </div>

          {/* Location & Help */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h6 className="footer-title">
              <LocationOn fontSize="small" /> Serving Cities
            </h6>
            <p className="footer-text">Delhi, Mumbai, Amritsar</p>
            <p className="footer-text help-link">
              <HelpOutline fontSize="small" /> Help & Support
            </p>
          </div>

        </div>

        <hr className="footer-divider" />

        <p className="footer-bottom text-center">
          © 2026 StreetTreats · Frontend UI Project
        </p>
      </div>
    </footer>
  )
}

export default Footer
