const express = require('express');
const { protect } = require('../middleware/auth');
const User = require('../models/user');

const router = express.Router();

// @desc    Get user dashboard stats
// @route   GET /api/users/dashboard
// @access  Private
router.get('/dashboard', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    // Get user's resume statistics
    const stats = {
      totalResumes: user.resumeCount,
      subscriptionPlan: user.subscription.plan,
      subscriptionActive: user.subscription.isActive,
      memberSince: user.createdAt,
      lastLogin: user.lastLogin
    };

    res.json({
      success: true,
      data: {
        stats,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          isEmailVerified: user.isEmailVerified
        }
      }
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Update user subscription
// @route   PUT /api/users/subscription
// @access  Private
router.put('/subscription', protect, async (req, res) => {
  try {
    const { plan } = req.body;
    
    if (!['free', 'pro', 'enterprise'].includes(plan)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid subscription plan'
      });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        'subscription.plan': plan,
        'subscription.startDate': new Date(),
        'subscription.isActive': true
      },
      { new: true }
    );

    res.json({
      success: true,
      message: 'Subscription updated successfully',
      data: {
        subscription: user.subscription
      }
    });
  } catch (error) {
    console.error('Subscription update error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during subscription update'
    });
  }
});

// @desc    Delete user account
// @route   DELETE /api/users/account
// @access  Private
router.delete('/account', protect, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);

    res.json({
      success: true,
      message: 'Account deleted successfully'
    });
  } catch (error) {
    console.error('Account deletion error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during account deletion'
    });
  }
});

module.exports = router;
