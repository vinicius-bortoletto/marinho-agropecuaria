import styled from "styled-components";

export const Container = styled.div`
  max-width: 25rem;

  .order_summary {
    position: relative;
    padding: var(--m_md);
    margin-bottom: var(--m_sm);

    background-color: var(--d_gold);
    border-radius: var(--br_sm);

    &::before {
      content: "";
      width: 1rem;
      height: 2rem;
      display: inline-block;

      position: absolute;
      top: -1rem;
      left: 50%;
      transform: translateX(-50%);

      background-color: var(--d_green);
      border-radius: var(--br_sm);
    }

    > .title {
      font-size: var(--fz_md);
      margin-bottom: var(--m_sm);
    }

    .product_amount,
    .delivery_tax {
      display: flex;
      justify-content: space-between;
    }

    .order_total {
      div {
        display: flex;
        justify-content: space-between;

        font-size: var(--fz_md);
        font-weight: bold;
      }

      .payment_method {
        display: block;
        font-size: var(--fz_sm);
        text-align: right;
      }
    }
  }

  button {
    font-weight: bold;
  }
`;