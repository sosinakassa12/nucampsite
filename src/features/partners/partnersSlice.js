import {PARTNERS} from '../../app/shared/PARTNERS';

export const selectallPartners = () => {
    return PARTNERS;
};

export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured) 
};