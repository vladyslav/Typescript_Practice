enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard;
console.log(membership); // 1

const membershipReverse = Membership[2];
console.log(membershipReverse); // Premium

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.VK;
console.log(social);
